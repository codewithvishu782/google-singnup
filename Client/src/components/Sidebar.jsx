import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/login", data);

      // token save
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("email")} placeholder="Email" />

            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          {/* Google Login Button */}
          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={() => {
              window.location.href = "http://localhost:5000/api/auth/google";
            }}
          >
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
