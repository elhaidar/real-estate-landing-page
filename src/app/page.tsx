import Container from "@/components/Container";
import GetStarted from "@/components/GetStarted";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Image from "next/image";
import Section4 from "@/components/Section4";
import SectionTestimoni from "@/components/SectionTestimoni";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Real Estate App | Investing In Your Future One Home At A Time",
    description:
      "We'll help you find the key to your dream home. Experience the joy of homeownership. Let us make your home buying journey simple.",
    url: "https://real-estate-landing-page-three.vercel.app",
    siteName: "Real Estate App",
    images: {
      url: "https://nextjs.org/og.png",
      width: 800,
      height: 600,
    },
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <Container>
      <div className="mx-8">
        <GetStarted />
      </div>
      <div className="bg-white">
        <div className="mx-8">
          <Section2 />
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-8">
          <Section3 />
        </div>
      </div>
      <div className="h-[30vh] md:h-[60vh] mx-8">
        <div className="py-8 relative">
          <Image
            src={"/Hero.jpg"}
            alt="img"
            object-fit="cover"
            className="rounded-3xl absolute -top-32 min-h-[250px] max-h-[30vh] md:max-h-[60vh]"
            width={1280}
            height={800}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="mx-8">
        <Section4 />
      </div>
      <SectionTestimoni />
    </Container>
  );
}
