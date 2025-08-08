import React, { useState } from 'react';
const projectsData = [
  { id: 1, name: "Technical Interview Platform", label: "MERN", category: "Full Stack Projects" },
  { id: 2, name: "Doctor Appointment System", label: "MERN", category: "Full Stack Projects" },
  { id: 3, name: "Deloitte Virtual Internship", label: "Internship", category: "Internships & Simulations" },
  { id: 4, name: "Skyscanner simulation", label: "Internship", category: "Internships & Simulations" },
  { id: 5, name: "Accenture UK- Introduction to Technology", label: "Simulation.", category: "Internships & Simulations" },
  { id: 6, name: "IBM Project Management", label: "Task Manager", category: "Internships & Simulations" },
  { id: 7, name: "Weather App ", label: "APIs", category: "Mini Projects" },
  { id: 8, name: "Currency Convertor", label: "APIs", category: "Mini Projects" },
  { id: 9, name: "Youtube Clone", label: "Clone", category: "Mini Projects" },
  { id: 10, name: "E-Commerce Website", label: "MERN", category: "Full Stack Projects" },
  { id: 11, name: "React-Ui-Kit", label: "Custom UI Components", category: "Frontend Development" }
]

const categories = ["All", "Full Stack Projects", "Frontend Development", "Internships & Simulations", "Mini Projects"]

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory)

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">PROJECTS</h2>

      <div className="portfolio-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div className="portfolio-card" key={project.id}>
            <div className="project-icon" />
            <a href="https://github.com/Pawansahu247" className="project-name">{project.name}</a>
            <p className="project-desc">
              {project.label}
              <br />
              <span>{project.category}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioPage
