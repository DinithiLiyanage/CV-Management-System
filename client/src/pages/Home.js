import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import JobDetailCard from "../components/JobDetailCard";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();

  const jobData = {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    position: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    tags: ["Remote"],
    salary: "$120k - $150k",
  };

  const handleSave = () => {
    alert("Job saved!");
  };

  useEffect(() => {
    console.log("userData:", userData); // Debugging
  }, [userData]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100%"}}>
        <div style={styles.header}>
          <h3>Welcome back, {userData?.name}</h3>
          <Button style={styles.button} onClick={handleLogout}>Logout</Button>
        </div>
        <div style={styles.body}>
          <h1>Job Listings</h1>
          <JobDetailCard
            logo={jobData.logo}
            position={jobData.position}
            company={jobData.company}
            location={jobData.location}
            tags={jobData.tags}
            salary={jobData.salary}
            onSave={handleSave}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  body: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    flex: "0 0 auto",
    width: "auto",
  },
};
