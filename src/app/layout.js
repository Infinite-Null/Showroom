import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Radhe Motors | TVS Bikes and Scooters Showroom in Sukna</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="Radhe Motors | TVS Bikes and Scooters Showroom in Sukna"
        />
        <meta
          name="description"
          content="Radhe Motors is an authorized TVS showroom in Sukna, offering a wide range of TVS bikes, scooters, and two-wheelers. Visit us for the best deals on TVS vehicles."
        />
        <meta
          name="keywords"
          content="Radhe Motors, TVS showroom Sukna, TVS bikes, TVS scooters, two-wheelers, bike showroom, scooty dealer, TVS Sukna"
        />
        <meta name="author" content="Radhe Motors" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta
          property="og:title"
          content="Radhe Motors | TVS Bikes and Scooters Showroom in Sukna"
        />
        <meta
          property="og:description"
          content="Discover the best deals on TVS bikes and scooters at Radhe Motors, your trusted TVS showroom in Sukna."
        />
        <meta
          property="og:image"
          content="http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.financialexpress.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fsuzuki-bike-zone-1.jpg&w=1080&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:3000/" />
        <meta
          property="twitter:title"
          content="Radhe Motors | TVS Bikes and Scooters Showroom in Sukna"
        />
        <meta
          property="twitter:description"
          content="Discover the best deals on TVS bikes and scooters at Radhe Motors, your trusted TVS showroom in Sukna."
        />
        <meta
          property="twitter:image"
          content="http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.financialexpress.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fsuzuki-bike-zone-1.jpg&w=1080&q=75"
        />
      </head>
      <body className={`${notoSans.variable} antialiased border-box`}>
        {children}
      </body>
    </html>
  );
}
