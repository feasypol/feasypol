import Nav from "../component/navbar/Nav";
import Hero from "../component/Hero/Hero";
import Footer from "../component/footer/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
};

export default function Page() {
  return (
    <>
      <div className="pt-12 sm:max-lg:px-20 lg:px-52 flex w-full flex-col">
        <Nav />
        <div className="bg-white border overflow-hidden">
          <Image
            src="/assets/maxresdefault.jpg"
            alt="placeholder"
            width={2000}
            height={1500}
            className="h-64 w-full object-cover"
          />
        </div>
        <Hero />
        <Footer />
      </div>
    </>
  );
}
