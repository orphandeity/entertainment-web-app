import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/layout";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${outfit.variable}`}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
