import Image from "next/image";

interface LogoProps {
  type: "bold" | "normal";
}
const Logo = ({ type }: LogoProps) => {
  return type == "bold" ? (
    <Image src={"/svgs/logo.svg"} alt="logo" width={130} height={40} />
  ) : (
    <Image src={"/svgs/logo2.svg"} alt="logo" width={130} height={40} />
  );
};

export default Logo;
