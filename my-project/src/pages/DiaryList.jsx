import { useEffect, useState } from "react";
import { API } from "../helper/http-client";

export default function DiaryList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await API.get("/cms/diary", {
          params: { status: "posted" },
        });
        setPosts(response.data?.content || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Diary Posts</h1>

      {posts.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading posts...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              {post.meta?.image && (
                <img
                  src={post.meta.image}
                  alt="Post thumbnail"
                  style={{ width: "100%", borderRadius: "8px", marginBottom: "0.5rem" }}
                />
              )}
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{post.meta?.title}</h2>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                {post.meta?.description || "No description available."}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "1rem" }}>
                Posted on: {new Date(post.created_dt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
