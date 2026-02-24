import AppButton from "@/components/common/AppButton";
import CardComponent from "@/components/common/CardComponent";
import { toast } from "sonner";
import React from "react";
import AppInput from "@/components/common/AppInput";
import { register } from "@/api/auth.api";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  async function handleRegister() {
    if (!name) {
      toast.error("Name is Required");
      return;
    }
    if (!email) {
      toast.error("Email is Required");
      return;
    }
    if (!password) {
      toast.error("Password is Required");
      return;
    }
    setLoading(true);
    try {
      const data = await register(name, email, password);
      localStorage.setItem("token", data.token);
      toast.success("Registration successful");
      window.location.href = "/login";
    } catch (err: any) {
      toast.error(err?.message || err?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  }
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
            <div className="flex flex-col gap-4 ">
              <AppInput
                label="Name"
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter the Name"
                onChange={(e) => setName(e.target.value)}
                className="border rounded-sm w-full px-3"
              />
            </div>
            <div className="flex flex-col gap-4">
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
                handleRegister();
              }}
              loading={false}
              positionIconRight={false}
              icon={null}
              className="w-full"
              disable={loading}
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
