"use client";

import React, { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "viem/chains";

type Props = { children: ReactNode };

function OnchainProviders({ children }: Props) {
  return (
    <OnchainKitProvider apiKey="e67ca08d-6f62-4c52-9eb4-fd40f2a51d03" chain={base}>
      {children}
    </OnchainKitProvider>
  );
}

export default OnchainProviders;
