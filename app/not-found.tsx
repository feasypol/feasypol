import { Metadata } from "next";
import LinkProject from "./component/LinkProject/LinkProject"
import Copyright from "./component/Copyright/copyright";

export const metadata: Metadata = {
    title: "404",
  };

export default function NotFound() {
    return(
        <div className="p-12 py-48 lg:p-48 lg:px-64 flex w-full flex-col object-center">
        <main className="text-center text-base lg:text-xl">
            <h1 className="mb-4 text-4xl font-extrabold">
                404 NOT FOUND
            </h1>
            <h2 className="mb-4 text-xl">This page does not seem to exist.</h2>
            <p>
                <LinkProject
                text="Back to home."
                link="/"
                target="_self"
                extraStyle="text-base underline font-semibold"
                />
            </p>
        </main>
        </div>
    )
}