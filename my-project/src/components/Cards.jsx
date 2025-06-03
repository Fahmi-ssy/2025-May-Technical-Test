import { Link } from "react-router-dom";

export default function Cards({ id, title, description, image, date }) {
  return (
    <Link to={`/detail/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          transition: "transform 0.2s",
          height: "400px",           // fixed height
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {image && (
          <img
            src={image}
            alt="Post thumbnail"
            style={{
              width: "100%",
              height: "200px",       // fixed image height
              borderRadius: "8px",
              marginBottom: "0.5rem",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        )}
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", flexShrink: 0 }}>{title}</h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#555",
            flexGrow: 1,            
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4,     // limits to 4 lines
            WebkitBoxOrient: "vertical",
          }}
        >
          {description || "No description available."}
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            color: "#999",
            marginTop: "1rem",
            flexShrink: 0,
          }}
        >
          Posted on: {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}
