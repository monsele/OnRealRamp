// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
contract EstatePool is ERC1155, ERC1155Holder, ERC1155Receiver {
	//////////////////
	/////ERRORS/////
    error EstatePool__TransactionFailed();
	///////////////////
	// State Variables
	///////////////////
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
	/// @dev This mapping is for tracking Auctions to the address that made it
	mapping (uint256 => AuctionData) public auction;
	///////////////////
	/////MODIFIERS/////
    
	///////////////////
	// Events
	///////////////////
	event TokenListed(address indexed owner,string indexed name,uint256 indexed id);
	event TokenBought(address indexed from,address indexed to,uint256 indexed tokenid);
    event AuctionCreated(address indexed creator, uint256 indexed tokenId, uint256 amount);
	function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155, ERC1155Receiver,ERC1155Holder)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
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
	struct AuctionData {
		uint256 TokenId;
		uint256 AmountToSell;
		address Owner;
	}
	enum EstateType {
		Land,
		Houses,
		Commercial,
		ApartMent
	}

	/// function to list and provide tokens of an asset
	/// @param id This is the id if the Asset
	/// @param name The name of asset
	/// @param totalPlots Total availiable plots
	/// @param amtToSell Amount willing to see to investors
	/// @param estateType Estate Type enum
	function CreateAsset(
		uint256 id,
		string memory name,
		uint256 totalPlots,
		uint256 amtToSell,
		EstateType estateType
	) external returns (TokenData memory) {
		
		TokenData memory tokenData = TokenData(
			name,
			id,
			msg.sender,
			totalPlots,
			amtToSell,
			estateType
		);
		_mint(msg.sender, id, totalPlots, "");
		
		ListedTokens.push(tokenData);
		availaibleTokenAmount[id] = amtToSell;
		tokenMapping[id] = tokenData;
		_setApprovalForAll(msg.sender,address(this),true);
		emit TokenListed(tokenData.Owner, tokenData.Name, tokenData.Id);
		return tokenData;
	}

    /// 
	/// @param tokenId  this is the Id of the token on the ListedToken array
	/// @param purchaseAmt this is the amount of uints that the user wants to purchase
	/// @param expectedPay This is the expected amount the user should send to the smart contract
	/// @return Id this holds the return value of the token that was bought
	/// @return amountBought this holds the value of the token that was successfully bought
	function BuyPlot(uint256 tokenId,uint256 purchaseAmt, uint256 expectedPay) external payable returns (uint256 Id, uint256 amountBought) {
		///@notice expected pay should be the converted value of the eth price to wei as wei is the value of msg.value
        require(expectedPay >= msg.value,"The amount sent is not enough for purchase");
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
	
	function AuctionAsset(uint256 tokenId, uint256 amount,uint256 auctionId )external  returns (bool) 
	{
        _safeTransferFrom(msg.sender,address(this), tokenId,amount,"0x");
		auction[auctionId] = AuctionData(tokenId,amount,msg.sender);
		emit AuctionCreated(msg.sender,tokenId,amount);
	  	return true;
	}
	function PayBid(uint256 amountToPay,uint256 auctionId) external payable returns (bool) {
		require(msg.value >= amountToPay,"Invalid Amount");
		AuctionData memory auctionData = auction[auctionId];
		uint256 amountToSell = auctionData.AmountToSell;
		address owner = auctionData.Owner;
		uint256 tokenId = auctionData.TokenId;
        (bool success, ) = owner.call{value: msg.value}("");
		require(success, "Eth transaction fails");
		//transfer to the tokens to the bidder
		_safeTransferFrom(address(this),msg.sender,tokenId,amountToSell,"0x");
		return true;
	}
	function GetListedTokens() external view returns (TokenData[] memory) {
		return ListedTokens;
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
	// function GetAuctionStatus(uint256 auctionId)  returns (bool) {
		
	// }
    receive() external payable {}
	
}
