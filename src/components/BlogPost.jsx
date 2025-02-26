import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postData = {
      1: { title: "Exploring the Mountains", body: "A journey through breathtaking landscapes.", image: "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" },
      2: { title: "Beaches & Sunsets", body: "Relaxing by the ocean with golden sunsets.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYJcMlhip-5aWHmL-UbwboZrfxDM2YTDhXA&s" },
      3: { title: "City Adventures", body: "Discovering the hidden gems of urban life.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNW-jSWoQKZ6-ddqD2kceunOYxSUOgGolqQ&s" },
    };

    setPost(postData[id]);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="post-header-image" />
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>

      {/* Share Button */}
      <button className="share-btn" onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        alert("Post link copied to clipboard!");
      }}>Share</button>

      <CommentSection />
    </div>
  );
};

export default BlogPost;
