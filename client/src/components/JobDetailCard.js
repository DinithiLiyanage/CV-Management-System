import React from "react";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import Bookmark from "@mui/icons-material/Bookmark";

const JobDetailCard = ({
  logo,
  position,
  company,
  location,
  tags,
  salary,
  onSave,
}) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleBookMark = () => {
    const newIsSaved = !isSaved; // Toggle the state
    setIsSaved(newIsSaved); // Update the state
    if (newIsSaved) {
      onSave(); // Call onSave only when the job is saved
    }
  };
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={logo} alt="Company Logo" style={styles.logo} />
        <button style={styles.saveButton} onClick={handleBookMark}>
          {isSaved ? <Bookmark /> : <BookmarkBorder />}
        </button>
      </div>
      <div style={styles.body}>
        <h3 style={styles.position}>{position}</h3>
        <p style={styles.company}>
          {company} - {location}
        </p>
      </div>
      <div style={styles.footer}>
        <div style={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p style={styles.salary}>{salary}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "16px",
    width: "300px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#FFF",
    backgroundColor: "#707793",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  logo: {
    width: "100px",
    height: "50px",
    objectFit: "contain",
    backgroundColor: "#FFF",
    padding: "4px",
  },
  saveButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
  },
  body: {
    marginBottom: "16px",
  },
  position: {
    margin: "0 0 8px 0",
    fontSize: "18px",
    fontWeight: "bold",
  },
  company: {
    margin: 0,
    textAlign: "left",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tags: {
    display: "flex",
    gap: "8px",
  },
  tag: {
    backgroundColor: "#43455C",
    borderRadius: "4px",
    padding: "4px 8px",
    fontSize: "12px",
  },
  salary: {
    fontWeight: "bold",
  },
};

export default JobDetailCard;
