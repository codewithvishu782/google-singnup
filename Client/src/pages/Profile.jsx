import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function Profile() {
  const { register, handleSubmit, setValue } = useForm();

  const [preview, setPreview] = useState(null);
  const [user, setUser] = useState(null);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile");

        setUser(res.data);

        // fill form with existing data
        setValue("name", res.data.name);
        setValue("mobile", res.data.mobile);
        setValue("bio", res.data.bio);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("mobile", data.mobile);
      formData.append("bio", data.bio);

      if (data.profilePic && data.profilePic[0]) {
        formData.append("profilePic", data.profilePic[0]);
      }

      await API.put("/profile", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Profile update failed");
    }
  };
  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Profile</h1>

        {user && (
          <div>
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Bio:</b> {user.bio}
            </p>
          </div>
        )}

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ width: "120px", borderRadius: "50%" }}
          />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <br />

          <input {...register("name")} placeholder="Name" />

          <br />
          <br />

          <input {...register("mobile")} placeholder="Mobile" />

          <br />
          <br />

          <textarea {...register("bio")} placeholder="Bio" />

          <br />
          <br />

          <input
            type="file"
            {...register("profilePic")}
            onChange={handleImageChange}
          />

          <br />
          <br />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
