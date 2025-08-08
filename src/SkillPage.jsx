// src/components/Skill.jsx

import React from 'react';
import './Skill.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiBootstrap, SiMysql, SiGithub } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38B2AC" /> },
  { name: 'BootStrap', icon: <SiBootstrap color="#38B2AC" /> },
  { name: 'MySQL', icon: <SiMysql color="#38B2AC" /> },
  { name: 'GitHub', icon: <SiGithub color="#38B2AC" /> },
];

const SkillPage = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
