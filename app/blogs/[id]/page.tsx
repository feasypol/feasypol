import Nav from "@/app/component/navbar/Nav";
import blog from "../../blogs.json";
import Footer from "@/app/component/footer/Footer";
import { metadata } from "@/app/layout";
import Copyright from "@/app/component/Copyright/copyright";
import Image from "next/image";

export default function Page(params: {params: {id: string}}) {
    const id = params.params.id;
    const blogPost = blog.blogs.find((blog) => blog.id.toString() === id);
    metadata.title = blogPost?.title + " - feasypol";

    return (
      <div className="p-8 lg:px-64 flex w-full flex-col text-xl lg:text-2xl">
        <Nav />
        <h1 className="text-center self-center underline font-bold mt-4">
          {blogPost?.title}
        </h1>
        <p className="self-center mt-2 mb-8">{blogPost?.date}</p>
        <div className="w-full lg:w-2/3 self-center mb-8">
        {blogPost?.image && (
          <Image
            src={blogPost.image}
            alt={blogPost.imageAlt}
            title={blogPost.imageAlt}
            width={1000}
            height={750}
          />
        )}
          {blogPost?.imageCaption && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {blogPost.imageCaption}
            </p>
        )}
        </div>
        {blogPost?.content.map((content: string, index) => (
          <div key={index} >
            <p className="text-base lg:text-xl font-medium">{content}</p>
            <br />
          </div>
        ))}
        <Footer />
        <Copyright />
      </div>
    );
    }