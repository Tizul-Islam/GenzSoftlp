import React, { useState } from "react";
import "./Header.css";

const categories = [
    "All",
    "Web App Development",
    "Mobile App Development",
    "AI & ML",
    "UI/UX Design",
    'Cloud Solutions',
    'E-Commerce Solutions',
    "DevOps Consulting",
    "Blockchain Development",
    "Data Analytics",
];

const Header = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section className="portfolio-section">
            <div className="portfolio-header">

                <div className="">
                    <h2 className="heading">
                        <span className="highlight">Some of Our</span> <br />
                        <span className="main">Great Work</span>
                    </h2>
                </div>
                <div className="category-buttons">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Header;