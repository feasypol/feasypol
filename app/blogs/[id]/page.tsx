import Nav from "@/app/component/navbar/Nav";
import blog from "../../blogs.json";
import Footer from "@/app/component/footer/Footer";
import Image from "next/image";



export default function Page(params: {params: {id: string}}) {
    const id = params.params.id;
    const blogPost = blog.blogs.find((blog) => blog.id.toString() === id);
    return (
      <div className="px-52 pt-12 flex w-full flex-col text-2xl/6">
        <Nav />
        <h1 className="self-center underline font-bold mt-4">
          {blogPost?.title}
        </h1>
        <p className="self-center mt-2 mb-9">{blogPost?.date}</p>
        <div className="flex w-full justify-center mb-9">
          <Image
            src="/assets/Cover_dekstop.png"
            alt="placeholder"
            width={1500}
            height={300}
            className="w-full"
          />
        </div>
        {blogPost?.content.map((content: string, index) => (
          <div key={index} >
            <p className="">{content}</p>
            <br />
          </div>
        ))}

        <Footer />
      </div>
    );
    }