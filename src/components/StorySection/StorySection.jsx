import React from "react";
import "./StorySection.css"; // Create this CSS file

const StorySection = () => {
  return (
    <div className="story-section">
      <div className="story-content">
        <h2 className="story-heading">We can build your story</h2>
        <p className="story-text">
          Through the years we have partnered with great companies and<br />
          entrepreneurs all over the world.
        </p>
        <button className="story-button">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default StorySection;