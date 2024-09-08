import Nav from "../component/navbar/Nav";
import Hero from "../component/Hero/Hero";
import Footer from "../component/footer/Footer";
import { Metadata } from "next";
import dynamic from 'next/dynamic';

const ImageWeb = dynamic(() => import("@/app/component/Imageweb/Imageweb"), { ssr: false });

export const metadata: Metadata = {
  title: "blog",
};

export default function Page() {
  return (
    <>
      <div className="gap-2 p-12 lg:px-52 flex w-full flex-col">
        <Nav />
          <ImageWeb
            srcDesktop="/assets/cover_desktop.png"
            srcMobile="/assets/cover_mobile.png"
            alt="placeholder"
            widthDesktop={1500}
            heightDesktop={300}
            widthMobile={500}
            heightMobile={100}
          />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
