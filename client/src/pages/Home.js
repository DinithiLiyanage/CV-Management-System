import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("userData:", userData); // Debugging
  }, [userData]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <div>
        Home
        <p>Welcome back, {userData?.username}</p>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}
