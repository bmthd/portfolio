import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BIZ_UDPGothic } from "@next/font/google";
import { Noto_Sans } from "@next/font/google";

const font = BIZ_UDPGothic({
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  adjustFontFallback: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
