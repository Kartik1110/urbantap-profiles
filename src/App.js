import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/authContext";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import {
  AZIZA_PROFILE,
  GEORGE_USER,
  HARJEET_USER,
  JAINAM_USER,
  VARUN_USER,
} from "./constants/profiles";
import VarunProfilePic from "./assets/varun_profile.jpeg";
import JainamProfilePic from "./assets/jainam_profile.jpeg";
import GeorgeProfilePic from "./assets/george_profile.jpg";
import HarjeetProfilePic from "./assets/harjeet_profile.jpeg";
import AzizaProfilePic from "./assets/aziza_profile.jpeg";
import Tabs from "./components/Tabs";
import BrokersPage from "./pages/Brokers";
import Jobs from "./pages/Jobs";
import Listings from "./pages/Listings";

function App() {
  const location = useLocation();

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
          {/* <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          <Route path="/home" element={<Listings />} />
          <Route path="/brokers" element={<BrokersPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/listings" element={<Listings />} />

          <Route
            path="/profile"
            element={
              <Profile user={VARUN_USER} profileImage={VarunProfilePic} />
            }
          />
          <Route
            path="/profile/varun"
            element={
              <Profile user={VARUN_USER} profileImage={VarunProfilePic} />
            }
          />
          <Route
            path="/profile/jainam"
            element={
              <Profile user={JAINAM_USER} profileImage={JainamProfilePic} />
            }
          />
          <Route
            path="/profile/george"
            element={
              <Profile user={GEORGE_USER} profileImage={GeorgeProfilePic} />
            }
          />
          <Route
            path="/profile/harjeet"
            element={
              <Profile user={HARJEET_USER} profileImage={HarjeetProfilePic} />
            }
          />
          <Route
            path="/profile/aziza"
            element={
              <Profile user={AZIZA_PROFILE} profileImage={AzizaProfilePic} />
            }
          />
        </Routes>
        {location.pathname !== "/register" &&
          location.pathname !== "/login" && <Tabs />}
      </AuthProvider>
    </>
  );
}

export default App;
