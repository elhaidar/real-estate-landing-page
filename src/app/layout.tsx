import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Providers } from "./provider";
import LayoutContainer from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://real-estate-landing-page-three.vercel.app"),
  title: "Real Estate App | Investing In Your Future One Home At A Time",
  description:
    "We'll help you find the key to your dream home. Experience the joy of homeownership. Let us make your home buying journey simple.",
  generator: "Next.js",
  applicationName: "Real Estate Landing Page",
  referrer: "origin-when-cross-origin",
  keywords: ["Real Estate", "Landing Page", "Property"],
  authors: { name: "Haidar" },
  creator: "Haidar",
  publisher: "Haidar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

async function getWeatherData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST as string,
    },
  };
  const res = await fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=Jakarta",
    { next: { revalidate: 2 }, headers: options.headers }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getWeatherData();

  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <LayoutContainer data={data}>
            <Navbar data={data} />
            {children}
            <Footer />
          </LayoutContainer>
        </Providers>
      </body>
    </html>
  );
}
