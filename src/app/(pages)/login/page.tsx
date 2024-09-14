import Logo from "@/components/ui/Logo";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-32 mt-20 mb-5 flex items-end gap-3">
        <Logo type="normal" />
        <h1>SIGNUP</h1>
      </div>
      <div className="w-full h-[100vh] bg-[url('/images/bg-login.png')] bg-no-repeat bg-contain" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
