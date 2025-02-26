import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPostList.css";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchedPosts = [
      { id: 1, title: "Exploring the Mountains", body: "A journey through breathtaking landscapes.", image: "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" },
      { id: 2, title: "Beaches & Sunsets", body: "Relaxing by the ocean with golden sunsets.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYJcMlhip-5aWHmL-UbwboZrfxDM2YTDhXA&s" },
      { id: 3, title: "City Adventures", body: "Discovering the hidden gems of urban life.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNW-jSWoQKZ6-ddqD2kceunOYxSUOgGolqQ&s" },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="blog-post-list">
      {/* Hero Section */}
      <div className="hero">
        <h1>Discover the World</h1>
        <p>Travel stories, tips, and breathtaking locations.</p>
      </div>

      {/* Blog Grid Layout */}
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <Link to={`/post/${post.id}`} className="post-link">
              <img src={post.image} alt={post.title} className="post-image" />
              <h2>{post.title}</h2>
              <p>{post.body.substring(0, 50)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
