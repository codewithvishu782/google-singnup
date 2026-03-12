import { useForm } from "react-hook-form";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function ChangePassword() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.put("/password", {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      alert("Password updated successfully");
    } catch (error) {
      alert("Password update failed");
    }
  };

  return (
    <div>
      <Navbar />

      <h1>Change Password</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          {...register("currentPassword")}
          placeholder="Current Password"
        />

        <br />
        <br />

        <input
          type="password"
          {...register("newPassword")}
          placeholder="New Password"
        />

        <br />
        <br />

        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm Password"
        />

        <br />
        <br />

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}

export default ChangePassword;
