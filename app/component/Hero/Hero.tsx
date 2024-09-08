import Link from "next/link";
import blog from "../../blogs.json";

interface Blog {
  title: string;
  date: string;
  content: string[];
  id: string;
}

export default function Hero() {
    const blogs  = blog.blogs;
    return (
      <div className="pt-8" >
        {blogs.map((blog: Blog) => (
          <div
<<<<<<< HEAD
            className="w-full flex justify-between text-base lg:text-xl mt-2"
=======
            className="w-full flex justify-between text-2xl/8 mt-4"
>>>>>>> parent of fdc19c6 (smaller fonts)
            key={blog.id}
          >
            <div className="w-full pr-6">
              <h2>
                <Link
                  href={"/blogs/" + blog.id}
                  className="underline hover:bg-black hover:text-white duration-300"
                >
                  {blog.title}
                </Link>
              </h2>
            </div>
            <p>{blog.date}</p>
          </div>
        ))}
      </div>
    );

}

// <div className="w-full flex justify-between  text-3xl/8 mt-4">
//           <h2>
//             <Link
//               href="/blogs"
//               className="underline hover:bg-black hover:text-white duration-200"
//             >
//               hello world
//             </Link>
//           </h2>
//           <p>12 November 2025</p>
//         </div>