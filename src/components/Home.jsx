import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Explore the World with My Travel Blog</h1>
        <p>Discover breathtaking places, travel tips, and amazing stories.</p>
        <Link to="/posts" className="explore-btn">Start Exploring</Link>
      </div>

      <div className="featured-images">
        <img src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="Travel 1" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYJcMlhip-5aWHmL-UbwboZrfxDM2YTDhXA&s" alt="Travel 2" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNW-jSWoQKZ6-ddqD2kceunOYxSUOgGolqQ&s" alt="Travel 3" />
      </div>
    </div>
  );
};

export default Home;
