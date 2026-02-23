import AppButton from "@/components/common/AppButton";
import CardComponent from "@/components/common/CardComponent";
import React from "react";

const Login = () => {
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
            <div className="flex flex-row justify-between items-center gap-4 ">
              <label htmlFor="email">Email</label>
              <input
                className="border rounded-sm w-70 px-3"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-4">
              <label htmlFor="password">Password</label>
              <input
                className="border rounded-sm w-70 px-3"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <AppButton
              variant="default"
              onClick={() => {
                console.log("Login button clicked");
              }}
              loading={false}
              positionIconRight={false}
              icon={null}
              className="w-full"
              disable={false}
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
