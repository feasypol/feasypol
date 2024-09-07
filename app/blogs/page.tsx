import Nav from "../component/navbar/Nav";
import Hero from "../component/Hero/Hero";
import Footer from "../component/footer/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="px-52 pt-12 flex w-full flex-col h-screen">
        <Nav />
        <div className="flex w-full justify-center">
          <Image
            src="/assets/Cover_dekstop.png"
            alt="placeholder"
            width={1500}
            height={300}
          />
        </div>
        <Hero />
        <Footer />
      </div>
    </>
  );
}
