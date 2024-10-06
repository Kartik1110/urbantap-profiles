import React, { useState } from "react";
import { toast } from "react-toastify";
import Logo from "../../components/ui/Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiEndPoints } from "../../constants/apiEndPoints";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const { email, password, confirmPassword, name } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "bottom-center" });
      return;
    }

    await axios
      .post(apiEndPoints.signup, {
        name,
        email,
        password,
      })
      .then((data) => {
        console.log("data", data.data.status === "success");
        if (data.data.status === "success") {
          navigate("/login");
          toast.success("User created successfully", {
            position: "bottom-center",
          });
        } else {
          toast.success(data.data.message, {
            position: "bottom-center",
          });
        }
      })
      .catch((error) => {
        console.log("upar", error.response.data.message);
        toast.error(`${error.response.data.message}! Try logging in.`, {
          position: "bottom-center",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-md p-8">
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <h3 className="mt-4 font-medium text-2xl">Signup</h3>
        </div>
        <form className="mt-6 space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={handleInputChange}
            required
            className="box-border flex items-center px-5 py-4 w-full h-[60px] bg-white border border-[#D8DADC] rounded-lg text-gray-500 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            required
            className="box-border flex items-center px-5 py-4 w-full h-[60px] bg-white border border-[#D8DADC] rounded-lg text-gray-500 text-sm"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            required
            className="box-border flex items-center px-5 py-4 w-full h-[60px] bg-white border border-[#D8DADC] rounded-lg text-gray-500 text-sm"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleInputChange}
            required
            className="box-border flex items-center px-5 py-4 w-full h-[60px] bg-white border border-[#D8DADC] rounded-lg text-gray-500 text-sm"
          />
          <button
            className="w-full h-14 bg-black flex justify-center items-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleRegister}
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already registered?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
