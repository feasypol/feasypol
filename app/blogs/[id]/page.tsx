import Nav from "@/app/component/navbar/Nav";
import blog from "../../blogs.json";
import Footer from "@/app/component/footer/Footer";
import Image from "next/image";
// import { Metadata } from "next";

// interface Page {
//   params: {id: string};
// }

// export async function generateMetadata({params: {id: string}}): Promise<Metadata> {
//   const id = params.params.id;
//   const blogPost = blog.blogs.find((blog) => blog.id.toString() === id);

//   return {
//     title: blogPost.title,
//     description: blogPost.body,
//   }
// }

export default function Page(params: {params: {id: string}}) {
    const id = params.params.id;
    const blogPost = blog.blogs.find((blog) => blog.id.toString() === id);
    
    return (
      <div className="p-12 lg:px-52 flex w-full flex-col text-xl">
        <Nav />
        <h1 className="self-center underline font-bold mt-4">
          {blogPost?.title}
        </h1>
        <p className="self-center mt-2 mb-8">{blogPost?.date}</p>
        <div className="bg-white border overflow-hidden flex w-full justify-center mb-8">
          <Image
            src="/assets/maxresdefault.jpg"
            alt="placeholder"
            width={2000}
            height={1500}
            className="h-64 w-full object-cover"
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