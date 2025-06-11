import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import JobDetailCard from "../components/JobDetailCard";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    alert("Job saved!");
  };

  useEffect(() => {
    setLoading(true);
    console.log("Fetching jobs...");
    fetch("http://localhost:3001/api/jobs")
      .then((res) => res.json())
      .then((jobs) => {
        // Adzuna API returns jobs in data.results
        console.log("Jobs fetched:", jobs);
        setJobs(jobs);
        setLoading(false);
      })
      .catch(() => {
        setJobs([]);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Loading jobs...</h2>
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          <div style={styles.header}>
            <h3>Welcome back, {userData?.name}</h3>
            <Button style={styles.button} onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <div style={styles.body}>
            <h1>Job Listings</h1>
            <div style={styles.cards}>
              {jobs.length === 0 && <p>No jobs found.</p>}
              {jobs.map((job, idx) => (
                <JobDetailCard
                  key={job.id || idx}
                  position={job.title}
                  company={job.company || "Unknown"}
                  location={job.location || "Unknown"}
                  tags={job.category ? [job.category] : []}
                  salary={
                    job.salary_min && job.salary_max
                      ? `$${job.salary_min} - $${job.salary_max}`
                      : "Not specified"
                  }
                  onSave={handleSave}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
  },
  body: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    flexDirection: "row",
    justifyContent: "flex-start", // left alignment
    alignItems: "flex-start",
  },
  button: {
    flex: "0 0 auto",
    width: "auto",
  },
};
