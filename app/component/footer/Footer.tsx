import LinkProject from "../LinkProject/LinkProject";

export default function Footer() {
    return (
      <div className="mx-auto self-center">
        <div className="flex w-full justify-center gap-12 mt-4">
          <LinkProject text="blog" link="/blogs" target="_self" />
          <LinkProject text="gallery" link="https://www.figma.com/design/EVGnDQlAtOT3NtSo14Ker8/Portfolio-Q1-2024" target="_blank" />
          <LinkProject text="mail" link="mailto:feasypol@gmail.com" target="_self" />
        </div>
      </div>
    );
}