import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

// Write functions

export const useAuctionAsset = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "AuctionAsset",
    args: [
      /* tokenId, amount, auctionId */
    ],
  });
};

export const useBuyPlot = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "BuyPlot",
    args: [
      /* tokenId, purchaseAmt, expectedPay */
    ],
  });
};

export const useCreateAsset = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "CreateAsset",
    args: [
      /* id, name, totalPlots, amtToSell, estateType */
    ],
  });
};

export const usePayBid = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "PayBid",
    args: [
      /* amountToPay, auctionId */
    ],
  });
};

export const useSafeBatchTransferFrom = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "safeBatchTransferFrom",
    args: [
      /* from, to, ids, amounts, data */
    ],
  });
};

export const useSafeTransferFrom = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "safeTransferFrom",
    args: [
      /* from, to, id, amount, data */
    ],
  });
};

export const useSetApprovalForAll = () => {
  return useScaffoldWriteContract({
    contractName: "EstatePool",
    functionName: "setApprovalForAll",
    args: [
      /* operator, approved */
    ],
  });
};

// Read functions

export const useGetAvailableTokenAmount = tokenId => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "GetAvailableTokenAmount",
    args: [tokenId],
  });
};

export const useGetListedTokens = () => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "GetListedTokens",
  });
};

export const useGetUserTokensData = userAddress => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "GetUserTokensData",
    args: [userAddress],
  });
};

export const useBalanceOf = (account, id) => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "balanceOf",
    args: [account, id],
  });
};

export const useBalanceOfBatch = (accounts, ids) => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "balanceOfBatch",
    args: [accounts, ids],
  });
};

export const useIsApprovedForAll = (account, operator) => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "isApprovedForAll",
    args: [account, operator],
  });
};

export const useSupportsInterface = interfaceId => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "supportsInterface",
    args: [interfaceId],
  });
};

export const useTokenDataMapping = tokenId => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "tokenDataMapping",
    args: [tokenId],
  });
};

export const useUri = tokenId => {
  return useScaffoldReadContract({
    contractName: "EstatePool",
    functionName: "uri",
    args: [tokenId],
  });
};
