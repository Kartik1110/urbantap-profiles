import "./App.css";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Listings from "./pages/Listings";
import ProfileV2 from "./pages/ProfileV2";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs"
import BrokersPage from "./pages/Brokers"
import Tabs from "./components/Tabs";

function App() {
  const location = useLocation();
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/" element={<Listings />} />
          <Route path="/profile/:id" element={<ProfileV2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Listings />} />
          <Route path="/brokers" element={<BrokersPage />} />
          <Route path="/jobs" element={<Jobs />} />

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/listings" element={<Listings />} /> */}
        </Routes>
        {location.pathname !== "/register" &&
          location.pathname !== "/login" && <Tabs />}
      </AuthProvider>
    </>
  );
}

export default App;
