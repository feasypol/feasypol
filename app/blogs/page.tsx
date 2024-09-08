import Nav from "../component/navbar/Nav";
import Hero from "../component/Hero/Hero";
import Footer from "../component/footer/Footer";
import { Metadata } from "next";
import ImageWeb from "../component/imageweb/imageweb";

export const metadata: Metadata = {
  title: "blog",
};

export default function Page() {
  return (
    <>
      <div className="grid gap-2 p-12 lg:px-52 flex w-full flex-col">
        <Nav />
        <div>
          <ImageWeb 
          srcDesktop="/assets/cover_desktop.png" 
          srcMobile="/assets/cover_mobile.png" 
          alt="placeholder"
          widthDesktop={1500}
          heightDesktop={300}
          widthMobile={500}
          heightMobile={100}
          />
        </div>
        <Hero />
        <Footer />
      </div>
    </>
  );
}
