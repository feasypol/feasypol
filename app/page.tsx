import Nav from "./component/navbar/Nav";
import LinkProject from "./component/LinkProject/LinkProject";
import Footer from "./component/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-52 pt-12 flex w-full flex-col ">
        <Nav />
        <div className="flex w-full justify-center">
          <Image
          src="/assets/Cover_dekstop.png"
          alt="placeholder"
          width={1500}
          height={300}
          className="w-full"
          />

          
        </div>
        <div className="pt-6 text-2xl/6">
          <h1 className="">
            <LinkProject text="easy" link="/" target="_blank" />
            &nbsp;(dia) <br />
            is a self-proclaimed artist. Focusing on graphic design and 3D art.
          </h1>
          <br />
          <p>
            Occasionally writing{" "}
            <LinkProject text="poems" link="/" target="_blank" />. Playing
            with&nbsp;
            <LinkProject text="codes" link="/" target="_blank" /> on the side.{" "}
            <br /> Their interest are community service, advocacy, inclusivity,
            and journalism. Would like to spend time to learn something new,
            everyday.
          </p>
          <br />
          <p>Based in Yogyakarta, Indonesia.</p>
          <br />
          <h2>
            <LinkProject text="easy!`" link="\" target="_blank" /> currently
            active in{" "}
            <LinkProject
              text="DEMA Fisipol UGM"
              link="\"
              target="_blank"
              extraStyle="underline"
            />
            ,{" "}
            <LinkProject
              text="SAUDC UGM"
              link="\"
              target="_bank"
              extraStyle="underline"
            />
            , and{" "}
            <LinkProject
              text="LPPM SINTESA"
              link="\"
              target="_bank"
              extraStyle="underline"
            />
            .
          </h2>
          <br />
          <p>Reach me out on @feasypol, everywhere.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
