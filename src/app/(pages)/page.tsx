import Slider from "@/components/Slider";
import LinkNav from "@/components/ui/Link";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[url('/images/bg-auth.png')] bg-cover">
      <div className="px-20 py-10 flex justify-between">
        <Logo type="bold" />
        <div className="space-x-4">
          <LinkNav href="/login" variant="secondary">
            Login
          </LinkNav>
          <LinkNav href="/sign-up" variant="primary">
            Sign Up
          </LinkNav>
        </div>
      </div>
      <div className="max-w-md h-[230px] mt-28 ml-20 relative ">
        <h2 className="text-4xl font-semibold leading-tight ">
          Prepare your event more{" "}
          <span className="text-blue50">efficiently</span> and{" "}
          <span className="text-blue50">faster</span>
        </h2>
        <Slider />
      </div>
      <div className="mt-10 px-20">
        <LinkNav href="/home">Explore CreatOr</LinkNav>
      </div>
    </div>
  );
}
