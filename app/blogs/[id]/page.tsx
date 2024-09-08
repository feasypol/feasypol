import Nav from "@/app/component/navbar/Nav";
import blog from "../../blogs.json";
import Footer from "@/app/component/footer/Footer";
import { metadata } from "@/app/layout";
import ImageWeb from "@/app/component/imageweb/imageweb";

export default function Page(params: {params: {id: string}}) {
    const id = params.params.id;
    const blogPost = blog.blogs.find((blog) => blog.id.toString() === id);
    metadata.title = blogPost?.title + " - feasypol";

    return (
      <div className="grid gap-2 p-12 lg:px-52 flex w-full flex-col text-2xl">
        <Nav />
        <h1 className="text-center self-center underline font-bold mt-4">
          {blogPost?.title}
        </h1>
<<<<<<< HEAD
        <p className="self-center mt-2 mb-8">{blogPost?.date}</p>
        <div className="flex w-full justify-center mb-8">
          <ImageWeb 
          srcDesktop="/assets/cover_desktop.png" 
          srcMobile="/assets/cover_mobile.png" 
          alt="placeholder"
          widthDesktop={1500}
          heightDesktop={300}
          widthMobile={500}
          heightMobile={100}
=======
        <p className="self-center mt-2 mb-9">{blogPost?.date}</p>
        <div className="bg-white border overflow-hidden justify-center mb-9">
          <Image
            src="/assets/maxresdefault.jpg"
            alt="placeholder"
            width={2000}
            height={1500}
            className="h-64 w-full object-cover"
>>>>>>> parent of fdc19c6 (smaller fonts)
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