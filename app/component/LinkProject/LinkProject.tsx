import Link from "next/link";
interface LinkProjectProps {
  text: string;
  link: string;
  target: string;
  extraStyle?: string;
}
export default function LinkProject(props: LinkProjectProps) {
    return (
      <Link href={props.link} className="pb-8" target={props.target}>
        <strong className={"font-bold text-xl/6  hover:bg-black hover:text-white ease-in-out duration-300 bg-white " +props.extraStyle}>
          {props.text}
        </strong>
      </Link>
    );
}