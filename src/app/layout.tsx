import { Jost, Courier_Prime } from "next/font/google";

const jost = Jost({ subsets: ["latin"], variable: "--font-display" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${courier.variable}`}>
      <body>{children}</body>
    </html>
  );
}
