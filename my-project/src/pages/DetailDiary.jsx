import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../helper/http-client";

export default function DetailDiary() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await API.get(`/cms/diary`);
        const found = response.data.content.find(
          (item) => item.id === id || item.id === Number(id)
        );
        setPost(found);
      } catch (error) {
        console.error("Failed to fetch detail:", error);
      }
    }

    fetchPost();
  }, [id]);

  if (!post)
    return (
      <p style={{ textAlign: "center", marginTop: "3rem" }}>Loading post...</p>
    );

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
        backgroundColor: "#fafafa",
        borderRadius: 12,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "1rem",
          textDecoration: "none",
          color: "#0077cc",
          fontWeight: "600",
        }}
      >
        ← Back to Diary List
      </Link>

      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        {post.meta?.title}
      </h1>

      {post.meta?.image && (
        <img
          src={post.meta?.image}
          alt={post.meta?.title}
          style={{
            width: "100%",
            borderRadius: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "1.5rem",
            objectFit: "cover",
          }}
        />
      )}

      <p
        style={{
          fontSize: "1.125rem",
          fontWeight: "500",
          color: "#555",
          marginBottom: "1.5rem",
        }}
      >
        {post.meta?.description}
      </p>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "#444",
          whiteSpace: "pre-line",
        }}
      />
    </div>
  );
}
