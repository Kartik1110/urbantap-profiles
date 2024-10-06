import React, { useEffect, useState } from "react";
import {
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Logo from "../../components/ui/Logo";
import { useAuth } from "../../contexts/authContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login, userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const onSubmit = async (e) => {
    console.log("signin", email, password);
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        if (email && password) {
          await login(email, password);
          navigate("/");
        } else {
          toast.error("Enter email and password", {
            position: "bottom-center",
          });
        }
      } catch (error) {
        toast.error(error.message, { position: "bottom-center" });
      }
      setIsSigningIn(false);
    }
  };

  // const handleSignInWithGoogle = async () => {
  //   if (!isSigningIn) {
  //     setIsSigningIn(true);
  //     try {
  //       // await doSignInWithGoogle();
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsSigningIn(false);
  //   }
  // };
  useEffect(() => {
    if (userLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-md bg-white p-8">
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <h3 className="mt-4 font-medium text-2xl">Login</h3>
        </div>
        <form className="mt-6 space-y-6">
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="box-border flex items-center px-5 py-4 w-[335px] h-[60px] bg-white border border-[#D8DADC] rounded-lg text-gray-500 text-sm"
            />
          </div>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="box-border flex items-center px-5 py-4 w-[335px] h-[60px] bg-white border border-[#D8DADC] rounded-lg text-gray-500 text-sm"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </div>
          </div>

          {/* <div className="text-sm">
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password?
            </a>
          </div> */}

          <button
            className="w-full h-14 bg-black flex justify-center items-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSigningIn}
            onClick={onSubmit}
          >
            {isSigningIn ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </button>
          </p>
        </div>

        {/* DO NOT REMOVE THE BELOW CODE */}

        {/* <div className="mt-6">
          <p className="text-center text-sm text-gray-600">Or log in with</p>
          <div className="mt-3 flex justify-center space-x-3">
            <button
              className="bg-white p-2 border border-gray-300 rounded-full shadow-sm hover:bg-gray-100"
              onClick={handleSignInWithGoogle}
            >
              <FaGoogle className="text-gray-600" />
            </button>
            <button className="bg-white p-2 border border-gray-300 rounded-full shadow-sm hover:bg-gray-100">
              <FaFacebookF className="text-gray-600" />
            </button>
            <button className="bg-white p-2 border border-gray-300 rounded-full shadow-sm hover:bg-gray-100">
              <FaApple className="text-gray-600" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
