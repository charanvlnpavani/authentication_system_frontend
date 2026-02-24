import { toast } from "sonner";
import api from "./axios";

export interface LoginResponse {
  token?: string;
  user?: any;
  [key: string]: any;
}

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data as LoginResponse;
  } catch (err: any) {
    const payload = err?.response?.data ?? {
      message: err?.message ?? "Network error",
    };
    throw payload;
  }
}

export async function register(
  name: string,
  email: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const res = await api.post("/auth/register", { name, email, password });
    return res.data as LoginResponse;
  } catch (err: any) {
    const payload = err?.response?.data ?? {
      message: err?.message ?? "Network error",
    };
    throw payload;
  }
}

export async function logout() {
  try {
    await api.post("/auth/logout");
    toast.success("Logout Successfully");
    localStorage.removeItem("token");
    window.location.href = "/login";
  } catch (err) {
    console.error("Logout failed:", err);
  }
}
