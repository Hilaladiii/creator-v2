import Link from "next/link";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="w-full flex flex-row bg-yellow50 justify-between items-center px-28 py-14 mt-16">
      <h1 className="text-4xl font-semibold">Creator</h1>
      <div className="w-1/2 flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg mb-5">Speakers</h2>
          <Link href={"/home"}>Technology</Link>
          <Link href={"/home"}>Environment</Link>
          <Link href={"/home"}>Health</Link>
          <Link href={"/home"}>Education</Link>
          <Link href={"/home"}>Economics</Link>
          <Link href={"/home"}>Psychology</Link>
          <Link href={"/home"}>Politics</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg mb-5">Sponsors</h2>
          <Link href={"/home"}>Technology</Link>
          <Link href={"/home"}>Environment</Link>
          <Link href={"/home"}>Health</Link>
          <Link href={"/home"}>Education</Link>
          <Link href={"/home"}>Economics</Link>
          <Link href={"/home"}>Psychology</Link>
          <Link href={"/home"}>Politics</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg mb-5">Quick Links</h2>
          <Link href={"/home"}>About Us</Link>
          <Link href={"/home"}>Contact Us</Link>
          <Link href={"/home"}>Privacy Policy</Link>
          <Link href={"/home"}>Terms & Conditions</Link>
        </div>
      </div>

      <Button label="Contact Us" />
    </footer>
  );
};

export default Footer;
