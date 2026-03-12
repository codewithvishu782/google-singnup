// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";

// function Signup() {
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const res = await API.post("/auth/signup", data);

//       // JWT token save
//       localStorage.setItem("token", res.data.token);

//       alert("Signup successful");

//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div>
//       <h1>Signup</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("name")} placeholder="Name" />

//         <br />

//         <input {...register("email")} placeholder="Email" />

//         <br />

//         <input
//           {...register("password")}
//           type="password"
//           placeholder="Password"
//         />

//         <br />

//         <input {...register("mobile")} placeholder="Mobile" />

//         <br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/signup", data);

      alert("Signup successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <Card className="w-[420px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Account</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("name")} placeholder="Full Name" />

            <Input {...register("email")} type="email" placeholder="Email" />

            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
