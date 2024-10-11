import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiEndPoints } from "../../constants/apiEndPoints";

const AuthContext = React.createContext();

// Create a custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [loading, setLoading] = useState(true);

  async function login(email, password) {
    try {
      // Make an Axios POST request to your login API endpoint
      const response = await axios.post(apiEndPoints.login, {
        email: email,
        password: password,
      });

      const brokerData = await axios
        .get(`${apiEndPoints.brokers}/${response.data.data.brokerId}`)
        .then((res) => {
          return res;
        });

      // Assuming the API returns user data upon successful login
      const user = {
        data: {
          ...response.data.data,
          profile_pic: brokerData.data.data.broker.profile_pic,
          name: brokerData.data.data.broker.name,
        },
        status: response.data.status,
        message: response.data.message,
      };

      // Set the current user and mark the user as logged in
      setCurrentUser(user);
      setUserLoggedIn(true);
      setIsEmailUser(true);
      localStorage.setItem("currentUser", JSON.stringify(user));
    } catch (error) {
      console.error("Login failed", error);
      throw new Error("Login failed");
    }
  }

  // Function to handle user logout
  function logout() {
    // Perform your custom logout logic (e.g., API call to backend if needed)
    setCurrentUser(null);
    setUserLoggedIn(false);
    setIsEmailUser(false);
    localStorage.removeItem("currentUser"); // Clear the user session
  }

  // Function to check if a user is logged in on initial load (e.g., check localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setUserLoggedIn(true);
      setIsEmailUser(true);
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    userLoggedIn,
    isEmailUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
