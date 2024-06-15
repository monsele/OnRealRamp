pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract EstatePool is ERC1155 {
	constructor(string memory _uri) ERC1155(_uri) {}
	uint256 private tokencounter;
	struct TokenData {
		string Name;
		uint256 Id;
		address Owner;
		uint256 TotalPlots;
		uint256 AmountToBeSold;
	}
     TokenData[] private TokenList;
	function CreateAsset(string memory name, address owner, uint256 totalPlots, uint256 amtToSell) external returns (bool) 
    {
        uint256 id = GetTokenCounter() + 1;
       TokenData memory tokenData =  TokenData(name,id,owner,totalPlots,amtToSell);
       TokenList.push(tokenData);
       //emit event
       _mint(msg.sender, id, totalPlots, "");
       //Are we minting every plot on chain or just using tokens to represent plots
       return true;
    }

    
	function GetTokenCounter() public view returns (uint256) 
    {
        return tokencounter;
    }
}
