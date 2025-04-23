import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased border-box`}
      >
        {children}
      </body>
    </html>
  );
}
