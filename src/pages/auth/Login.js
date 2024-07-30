import React, { useState } from "react";
import "./Login.css";
import { FaApple, FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/ui/Logo";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

const App = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setError(error.message);
      }
      setIsSigningIn(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setError(error.message);
      }
      setIsSigningIn(false);
    }
  };

  return (
    <div className="login">
      {userLoggedIn && <Navigate to="/Home" replace={true} />}
      <div className="login-container">
        <Logo />
        <form className="login-form" onSubmit={onSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Enter Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: "10px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              <button
                type="button"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className="show-password-button"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="forgot-password">
            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button" disabled={isSigningIn}>
            {isSigningIn ? "Signing in..." : "Sign in"}
          </button>

          {error && <p className="error">{error}</p>}
        </form>
        <div className="signup-link">
          <p>
            Don't have an account?
            <a href="/register" className="signup-link" style={{ color: "blue" }}>
              Sign up
            </a>
          </p>
        </div>
        <div className="login-alternatives">
          <p>Or Log in with</p>
          <div className="social-login">
            <button className="social-button" onClick={handleSignInWithGoogle}>
              <FaGoogle />
            </button>
            <button className="social-button">
              <FaFacebookF />
            </button>
            <button className="social-button">
              <FaApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
