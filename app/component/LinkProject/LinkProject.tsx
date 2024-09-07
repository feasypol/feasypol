import Link from "next/link";
interface LinkProjectProps {
  text: string;
  link: string;
  target: string;
  extraStyle?: string;
}
export default function LinkProject(props: LinkProjectProps) {
    return (
      <Link href={props.link} className="pb-7" target={props.target}>
        <strong className={"font-bold text-2xl/6  hover:bg-black hover:text-white ease-in-out duration-200 bg-white " +props.extraStyle}>
          {props.text}
        </strong>
      </Link>
    );
}