import { useEffect, useState } from "react";
import { API } from "../helper/http-client";
import Cards from "../components/Cards";

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
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#fff",
          textShadow: "0 0 8px #00bcd4",
        }}
      >
        Diary Posts
      </h1>

      {posts.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading posts...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <Cards
              key={post.id}
              id={post.id}
              title={post.meta?.title}
              description={post.meta?.description}
              image={post.meta?.image}
              date={post.created_dt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
