import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import { AuthProvider } from "./contexts/authContext";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import { Navigate } from "react-router-dom";
import Register from "./pages/auth/Register";
import { GEORGE_USER, JAINAM_USER, VARUN_USER } from "./constants/profiles";
import VarunProfilePic from "./assets/varun_profile.jpeg";
import JainamProfilePic from "./assets/jainam_profile.jpeg";
import GeorgeProfilePic from "./assets/george_profile.jpg"
import Tabs from "./components/Tabs";
import Brokers from "./pages/Brokers";
import Jobs from "./pages/Jobs";
import Listings from "./pages/Listings";

function App() {
  // const { userLoggedIn } = useAuth();

  // console.info("isLoggedIn", userLoggedIn);

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile user={VARUN_USER} profileImage={VarunProfilePic} />} />
          <Route path="/profile/varun" element={<Profile user={VARUN_USER} profileImage={VarunProfilePic} />} />
          <Route path="/profile/jainam" element={<Profile user={JAINAM_USER} profileImage={JainamProfilePic} />} />
          <Route path="/profile/george" element={<Profile user={GEORGE_USER} profileImage={GeorgeProfilePic} />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
        <Tabs />
      </AuthProvider>
    </>
  );
}

export default App;
