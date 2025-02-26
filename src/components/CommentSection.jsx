import React, { useState } from "react";
import "./CommentSection.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <h2 className="comment-header">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="comment-input"
        />
        <button type="submit" className="submit-btn">
          Post Comment
        </button>
      </form>

      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
