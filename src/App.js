import "./App.css";
import { useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/authContext";
import { useEffect, useState } from "react";

import Listings from "./pages/Listings";
import ProfileV2 from "./pages/ProfileV2";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/profile/:id" element={<ProfileV2 />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* <Route path="/home" element={<Listings />} /> */}
          {/* <Route path="/brokers" element={<BrokersPage />} />
          <Route path="/jobs" element={<Jobs />} /> */}
          {/* <Route path="/listings" element={<Listings />} /> */}

          {/* <Route path="/profile" element={<Profile user={VARUN_USER} profileImage={VarunProfilePic} />}/>
          <Route path="/profile/varun" element={<Profile user={VARUN_USER} profileImage={VarunProfilePic} />}/> 
          <Route path="/profile/jainam" element={<Profile user={JAINAM_USER} profileImage={JainamProfilePic} />}/>
          <Route path="/profile/george" element={<Profile user={GEORGE_USER} profileImage={GeorgeProfilePic} />}/>
          <Route path="/profile/harjeet" element={<Profile user={HARJEET_USER} profileImage={HarjeetProfilePic} />}/>
          <Route path="/profile/aziza" element={<Profile user={AZIZA_PROFILE} profileImage={AzizaProfilePic} />}/>
          <Route path="/profile/pritpal" element={<Profile user={PRITPAL_USER} profileImage={PritpalProfilePic} />}/>
           */}
        </Routes>
        {/* {location.pathname !== "/register" &&
          location.pathname !== "/login" && 
          <Tabs />} */}
      </AuthProvider>
    </>
  );
}

export default App;
