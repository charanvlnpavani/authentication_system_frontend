import App from "@/App";
import AppButton from "@/components/common/AppButton";
import CardComponent from "@/components/common/CardComponent";
import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-[#425249] to-[#050505]">
      <CardComponent
        title="Register"
        subtitle="Please fill in the details to create an account."
        footer={
          <p className="m-auto">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-400 hover:underline hover:text-blue-500 "
            >
              Login
            </a>
          </p>
        }
        children={
          <form
            className="flex flex-col gap-4  "
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-row justify-between items-center gap-4 ">
              <label htmlFor="name">Name</label>
              <input
                className="border rounded-sm w-70 px-3"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
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
            <div className="flex flex-row justify-between items-center gap-4 ">
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
                console.log("Register button clicked");
              }}
              loading={false}
              positionIconRight={false}
              icon={null}
              className="w-full"
              disable={false}
            >
              Register
            </AppButton>
          </form>
        }
        className="w-[25vw] m-auto"
      />
    </div>
  );
};

export default Register;
