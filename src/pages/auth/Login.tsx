import AppButton from "@/components/common/AppButton";
import CardComponent from "@/components/common/CardComponent";
import { toast } from "sonner";
import React from "react";
import AppInput from "@/components/common/AppInput";
import { login } from "@/api/auth.api";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  async function handleLogin() {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    setLoading(true);
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      toast.success("Login Successfully");
      window.location.href = "/dashboard";
    } catch (err: any) {
      toast.error(err?.message || err?.error || "Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-[#425249] to-[#050505]">
      {" "}
      <CardComponent
        title="Login"
        subtitle="Please enter your credentials to login."
        footer={
          <p className="m-auto">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-400 hover:underline hover:text-blue-500 "
            >
              Register
            </a>
          </p>
        }
        children={
          <form
            className="flex flex-col gap-4  "
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4 ">
              <AppInput
                label="Email"
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter the Email"
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-sm w-full px-3"
              />
            </div>
            <div className="flex flex-col gap-4">
              <AppInput
                label="Password"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter the Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-sm w-full px-3"
              />
            </div>
            <AppButton
              variant="default"
              onClick={() => {
                handleLogin();
              }}
              loading={false}
              positionIconRight={false}
              icon={null}
              className="w-full"
              disable={loading}
            >
              Login
            </AppButton>
          </form>
        }
        className="w-[25vw] m-auto"
      ></CardComponent>
    </div>
  );
};

export default Login;
