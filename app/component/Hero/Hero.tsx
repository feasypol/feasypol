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
            className="w-full flex justify-between text-2xl/8 mt-4"
            key={blog.id}
          >
            <h2>
              <Link
                href={"/blogs/" + blog.id}
                className="underline hover:bg-black hover:text-white duration-300"
              >
                {blog.title}
              </Link>
            </h2>
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