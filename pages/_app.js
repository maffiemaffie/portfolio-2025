import "@/styles/globals.scss";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-instrument-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={instrumentSans.variable}>
      <Component {...pageProps} />
    </main>
  );  
}