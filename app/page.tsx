import Nav from "./component/navbar/Nav";
import LinkProject from "./component/LinkProject/LinkProject";
import Footer from "./component/footer/Footer";
import dynamic from 'next/dynamic';

const ImageWeb = dynamic(() => import("@/app/component/Imageweb/Imageweb"), { ssr: false });

export default function Home() {
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
        <div className="pt-6 text-xl mb-2">
          <h1 className="">
            <LinkProject text="easy!" link="https://twitter.com/feasypol" target="_blank" />
            &nbsp;(dia) <br />
            is a self-proclaimed artist. Actively doing photography, graphic design, and 3D art.
          </h1>
          <br />
          <p>
            Occasionally writing{" "}
            <LinkProject text="poems" link="https://instagram.com/sajakmesin" target="_blank" />. Playing
            with&nbsp;
            <LinkProject text="codes" link="https://github.com/feasypol" target="_blank" /> on the side.{" "}
            <br /> Their interest are community service, advocacy, inclusivity,
            and journalism. Would like to spend time to learn something new,
            everyday.
          </p>
          <br />
          <p>Based in Yogyakarta, Indonesia.</p>
          <br />
          <h2>
            <LinkProject text="easy!" link="\" target="_blank" /> currently
            active in{" "}
            <LinkProject
              text="DEMA Fisipol UGM"
              link="https://instagram.com/demafisipolugm"
              target="_blank"
              extraStyle="underline"
            />
            ,{" "}
            <LinkProject
              text="SAUDC UGM"
              link="https://instagram.com/pedulidifabelugm"
              target="_bank"
              extraStyle="underline"
            />
            , and{" "}
            <LinkProject
              text="LPPM SINTESA"
              link="https://instagram.com/lppmsintesa"
              target="_bank"
              extraStyle="underline"
            />
            .
          </h2>
          <br />
          <p>Reach me out on{" "}
            <LinkProject
              text="@feasypol"
              link="https://instagram.com/feasypol"
              target="_bank"
              extraStyle="underline"
            />
            {" "}everywhere.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
