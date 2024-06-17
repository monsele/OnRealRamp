pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract EstatePool is ERC1155 {
	//////////////////
	/////ERRORS/////

	///////////////////
	// State Variables
	///////////////////
	uint256 private tokencounter;
	TokenData[] private TokenList;
	TokenData[] private ListedTokens;

	// @dev mapping of tokenId to amount sold
	mapping(uint256 tokenId => uint256 amountSold) public availaibleTokenAmount;
	mapping(uint256 tokenId => TokenData tokenData) tokenMapping;
	///////////////////
	/////MODIFIERS/////

	///////////////////
	// Events
	///////////////////
    event TokenListed(address indexed owner, string indexed name,uint256 indexed id);
	constructor(string memory _uri) ERC1155(_uri) {
		_setURI(_uri);
	}

	struct TokenData {
		string Name;
		uint256 Id;
		address Owner;
		uint256 TotalPlots;
		uint256 AmountToBeSold;
	}
    /*
     * @param Name: The Name token address of the collateral you're redeeming
     * @param amountCollateral:Owner is the msg.center
     * @param totalPlots : The total plots to be created
     * @notice If you have DSC minted, you will not be able to redeem until you burn your DSC
     */
	function CreateAsset(
		string memory name,
		address owner,
		uint256 totalPlots,
		uint256 amtToSell
	) external returns (TokenData memory) {
		uint256 id = GetTokenCounter() + 1;
		TokenData memory tokenData = TokenData(
			name,
			id,
			owner,
			totalPlots,
			amtToSell
		);
		_mint(msg.sender, id, totalPlots, "");
        TokenList.push(tokenData);
        ListedTokens.push(tokenData);
		availaibleTokenAmount[id] = amtToSell;
		tokenMapping[id] = tokenData;
        emit TokenListed(tokenData.Owner, tokenData.Name, tokenData.Id);
		return tokenData;
	}
    
     /** Nagte */
     function GetListedTokens() external view returns(TokenData[] memory) {
        return ListedTokens;
     }

	function GetTokenCounter() public view returns (uint256) {
		return tokencounter;
	}
}
