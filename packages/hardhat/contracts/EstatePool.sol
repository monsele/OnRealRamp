// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract EstatePool is ERC1155 {
	//////////////////
	/////ERRORS/////
    error EstatePool__TransactionFailed();
	///////////////////
	// State Variables
	///////////////////
	uint256 private tokencounter;
	TokenData[] private TokenList;
	TokenData[] private ListedTokens;

	/// @dev mapping of tokenId to amount sold
	mapping(uint256 => uint256) public availaibleTokenAmount;
	///@dev Mapping for tokenId -> tokendata
	mapping(uint256 => TokenData) tokenMapping;
	/// @dev This refers to the user's total value bought
    mapping (address => uint) userTvl;
	/// @dev This is the user's total yields gained
	mapping (address => uint) totalYields;
	/// @dev This ties all the users to their respective tokens
	 mapping(address => TokenData[]) private userTokens;
	 /// @dev This mapping is the mapping of tokenId to TokenData
	mapping(uint256 => TokenData) public tokenDataMapping;
	
	///////////////////
	/////MODIFIERS/////
    
	///////////////////
	// Events
	///////////////////
	event TokenListed(address indexed owner,string indexed name,uint256 indexed id);
	event TokenBought(address indexed from,address indexed to,uint256 indexed tokenid);

	constructor(string memory _uri) ERC1155(_uri) {
		//https://myapp.com/{tokenId}
		_setURI(_uri);
	}

	struct TokenData {
		string Name;
		uint256 Id;
		address Owner;
		uint256 TotalPlots;
		uint256 AmountToBeSold;
		EstateType Type;
	}
   struct UserTokenData {
       // TokenData tokenData;
		uint256 tokenId;
		string Name;
		string Description;
        uint256 amountOwned;
    }
	enum EstateType {
		Land,
		Houses,
		Commercial,
		ApartMent
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
		uint256 amtToSell,
		EstateType estateType
	) external returns (TokenData memory) {
		uint256 id = GetTokenCounter() + 1;
		TokenData memory tokenData = TokenData(
			name,
			id,
			owner,
			totalPlots,
			amtToSell,
			estateType
		);
		_mint(msg.sender, id, totalPlots, "");
		TokenList.push(tokenData);
		ListedTokens.push(tokenData);
		availaibleTokenAmount[id] = amtToSell;
		tokenMapping[id] = tokenData;
		_setApprovalForAll(msg.sender,address(this),true);
		emit TokenListed(tokenData.Owner, tokenData.Name, tokenData.Id);
		return tokenData;
	}

	function BuyPlot(uint256 tokenId,uint256 purchaseAmt) external payable returns (uint256 Id, uint256 amountBought) {
		TokenData memory data = tokenMapping[tokenId];
		uint256 availiableAmt = availaibleTokenAmount[tokenId];
		require(purchaseAmt <= availiableAmt,"Purchase amount exceeds the availiable amount");
		address recipient = data.Owner;
		(bool success, ) = recipient.call{value: msg.value}("");
		require(success, "ETH transfer failed");
        _safeTransferFrom(recipient,msg.sender,tokenId,purchaseAmt,"0x");
		availaibleTokenAmount[tokenId] = availaibleTokenAmount[tokenId]-purchaseAmt;
		userTvl[msg.sender] = userTvl[msg.sender]+msg.value;
        //userTokens[msg.sender] = userTokens[msg.sender].push(data);
		userTokens[msg.sender].push(data);
        emit TokenBought(recipient,msg.sender,tokenId);
		Id = tokenId;
		amountBought = purchaseAmt;
	}
	
	// function AuctionAsset(address owner, uint256 tokenId, uint256 )  returns (bool) {
	// 	Owner
	//   	 return true;
	// }

	/** Nagte */
	function GetListedTokens() external view returns (TokenData[] memory) {
		return ListedTokens;
	}

	function GetTokenCounter() public view returns (uint256) {
		return tokencounter;
	}
	function GetAvailableTokenAmount(uint256 tokenId) external view  returns (uint256) {
		return availaibleTokenAmount[tokenId];
	}
	function GetUserTokensData(address user) external view returns (UserTokenData[] memory) {
		TokenData[] memory userTokenData = userTokens[user];
		UserTokenData[] memory userTokenInfo = new UserTokenData[](userTokenData.length); 

		uint256 tokenBalance = 0;
		for (uint i = 0; i < userTokenData.length; i++) {
			TokenData memory data = userTokenData[i];
	        tokenBalance= balanceOf(user,data.Id);
			userTokenInfo[i] = UserTokenData(data.Id,data.Name,data.Name,tokenBalance);
		}
		return userTokenInfo;
	}

	
}
