import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import Lessons from "./Pages/Lessons";
import Trips from "./Pages/Trips";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./components/Navbar";

const USER_STORAGE_KEY = "voyage-francais-user";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = window.localStorage.getItem(USER_STORAGE_KEY);

    if (!savedUser) {
      return;
    }

    try {
      setCurrentUser(JSON.parse(savedUser));
    } catch {
      window.localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, []);

  function handleUserChange(user) {
    setCurrentUser(user);

    if (user) {
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    window.localStorage.removeItem(USER_STORAGE_KEY);
  }

  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} onUserChange={handleUserChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/login" element={<Login onUserChange={handleUserChange} />} />
        <Route path="/register" element={<Register onUserChange={handleUserChange} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;