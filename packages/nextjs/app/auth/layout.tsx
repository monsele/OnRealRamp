import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Packets",
  description: "Portfolio",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className="bg-[#F7FCFF]">
        <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        <div>Testttt</div>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
