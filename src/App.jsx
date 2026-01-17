

import React, { useState } from 'react';
import './assets/css/style.css';
import avatar1 from './assets/images/avatar-1.png';
import avatar2 from './assets/images/mypic.png';
import './App.css'; 
import '../src/index.css';
import ContactPage from './ContactPage';
import PortfolioPage from './PortfolioPage';
import SkillPage from './SkillPage';
import leetIcon from './assets/images/leet.png';
import FrontIcon from './assets/images/icon-design.svg';
import web from './assets/images/icon-dev.svg';
import mobile from './assets/images/icon-app.svg';
import ui from './assets/images/icon-photo.svg';


const App = () => {
  // State to manage the currently active page (e.g., 'about', 'resume')
  const [activePage, setActivePage] = useState('about');
  // State to manage the sidebar's open/close state on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle navigation button clicks and set the active page
  const handleNavClick = (pageName) => {
    setActivePage(pageName);
  };

  // Function to toggle the sidebar's visibility
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Renders the content of the currently active page
  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />;
      case 'resume':
        return <ResumePage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'skill':
        return <SkillPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AboutPage />; // Default to About page
    }
  };

  return (
    <main className="app-container"
  style={{
    background: 'linear-gradient(to right, #2c5465ff, #73a3b2ff, #ffffffff)',
    minHeight: '100vh',
    color: 'white',
  }}
>
      
      {/* Sidebar component */}
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
  <img src={avatar2} alt="Pawan Prasad Sahu" width="80" />
</figure>

          <div className="info-content">
            <h1 className="name" title="Pawan Prasad Sahu">Pawan Prasad Sahu</h1>
            <p className="title">Full Stack Developer</p>
          </div>
          <button className="info_more-btn" onClick={handleSidebarToggle}>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>
        <div className={`sidebar-info_more ${isSidebarOpen ? 'active' : ''}`}>
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:sahupawanprasad@gmail.com" className="contact-link">sahupawanprasad@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="#" className="contact-link">+91 xxx</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2005-05-31">31 May, 2005</time>
              </div>
            </li>


 {/* leetcode */}
 
<li className="contact-item">
  <div className="icon-box">
    <img
      src={leetIcon}
      alt="LeetCode"
      className="leetcode-icon"
      style={{ width: '24px', height: '24px', filter: 'invert(61%) sepia(78%) saturate(1333%) hue-rotate(3deg) brightness(101%) contrast(94%)' }}
    />
  </div>
  <div className="contact-info">
    <p className="contact-title">LeetCode</p>
    <a
      href="https://leetcode.com/u/sahux07/"
      target="_blank"
      rel="noopener noreferrer"
      className="leetcode-link"
    >
      50 + Questions Solved
    </a>
  </div>
</li>

          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://github.com/Pawansahu247" className="social-link">
                <ion-icon name="logo-github"></ion-icon>

              </a>
            </li>
            <li className="social-item">
              <a href="https://x.com/PawanPrasa48975" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/in/pawan-sahu007" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>

              </a>
            </li>
             <li className="social-item">
                <a
                  href="https://leetcode.com/u/sahux07/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    style={{ width: "24px", height: "24px", objectFit: "contain" }}
                  />
                </a>
             </li>
            <li className="social-item">
              <a href="https://www.instagram.com/_sahu_245/?__pwa=1" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <div className="main-content"
       style={{
    background: 'linear-gradient(to right, #2c5465ff, #73a3b2ff, #ffffffff)',
    minHeight: '100vh',
    color: 'white',
  }}>
        {/* Navigation bar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button
                className={`navbar-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`}
                onClick={() => handleNavClick('resume')}
              >
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleNavClick('portfolio')}
              >
                Projects
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${activePage === 'skill' ? 'active' : ''}`}
                onClick={() => handleNavClick('skill')}
              >
                Skill
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Render the active page content */}
        {renderPage()}
      </div>
    </main>
  );
};

// --- Page Components ---

// About Page Component
const AboutPage = () => (
  <article className="about active" data-page="about"
   style={{
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    minHeight: '100vh',
    color: 'white',
  }}>
    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
    <section className="about-text">
      <p>
        Hi I’m Pawan Sahu a BSc Computer Science student from Ranchi with a passion for web development. I enjoy building responsive and user-friendly websites using HTML CSS JavaScript and React. I’m also learning backend with Python. Always curious and ready to learn I love turning ideas into real projects. Let’s build something awesome together!
      </p>
      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
      </p>
    </section>

    {/* Service Section */}
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            {/* Image path assumes 'icon-design.svg' is in public/assets/images */}
            <img src={FrontIcon} alt="design icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Frontend Engineering</h4>
            <p className="service-item-text">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            {/* Image path assumes 'icon-dev.svg' is in public/assets/images */}
            <img src={web} alt="Web development icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>
            <p className="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            {/* Image path assumes 'icon-app.svg' is in public/assets/images */}
            <img src={mobile} alt="mobile app icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Wireframing</h4>
            <p className="service-item-text">
              Professional wire-framing for applications for iOS and Android.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            {/* Image path assumes 'icon-photo.svg' is in public/assets/images */}
            <img src={ui} alt="camera icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">UI-Prototype</h4>
            <p className="service-item-text">
              I make high-quality prototype of web designs of any category at a professional level.
            </p>
          </div>
        </li>
      </ul>
    </section>

    {/* Testimonials Section */}
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Mentors</h3>
      <ul className="testimonials-list has-scrollbar">
        <li className="testimonials-item">
          <div className="content-card">
            <figure className="testimonials-avatar-box">
              {/* Image path assumes 'avatar-1.png' is in public/assets/images */}
              <img src={avatar1} alt="Roshan Prasad Sahu" width="60" />
            </figure>
            <h4 className="h4 testimonials-item-title">Roshan Prasad Sahu</h4>
            <div className="testimonials-text">
              <p>
                he’s my mentor guide and biggest inspiration. As a skilled software engineer he constantly motivates me to push my limits stay curious and keep learning. His journey in tech inspires me every day to dream bigger and work harder. I’m truly lucky to have a brother who not only believes in me but also supports me like a true mentor.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card">
            <figure className="testimonials-avatar-box">
              {/* Image path assumes 'avatar-1.png' is in public/assets/images */}
              <img src={avatar1} alt="Abhinav Shukla" width="60" />
            </figure>
            <h4 className="h4 testimonials-item-title">Abhinav Shukla</h4>
            <div className="testimonials-text">
              <p>
                Abhinav Shukla is not just my college mate but also a great friend and an amazing teammate. We’ve worked on several projects together and his dedication problem-solving skills and chill attitude make every project smoother and more fun. From coding late nights to brainstorming new ideas he’s been a solid partner in my learning journey.
              </p>
            </div>
          </div>
        </li>
        
      </ul>
    </section>
  </article>
);

// Resume Page Component
const ResumePage = () => (
  <article className="resume active" data-page="resume"
   style={{
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    minHeight: '100vh',
    color: 'white',
  }}>
    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    {/* Education Timeline */}
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Marwari College Ranchi </h4>
          <span>2023 — 2026</span>
          <p className="timeline-text">
            I’m currently in my second year<span>B.Sc-Computer Science with CGPA 8.4</span>
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Holy Cross School <span>XIIth</span></h4>
          <span>2022 — 2023</span>
          <p className="timeline-text">
            Completed 12th grade from CBSE Board with<span>76.6%</span>
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Holy Cross School <span>Xth</span></h4>
          <span>2020 — 2021</span>
          <p className="timeline-text">
           Completed 10th grade from CBSE Board with<span>73.2%</span>
          </p>
        </li>
      </ol>
    </section>

    {/* Experience Timeline */}
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 className="h3">Certificates</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title"><span>Deloitte Virtual Internship</span></h4>
          <span>2025</span>
          <p className="timeline-text">
           Successfully completed the Deloitte Technology Consulting Virtual Internship, gaining hands-on experience in real-world business and technology solutions.
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title"><span>Skyscanner Software Engineering Internship</span></h4>
          <span>2025</span>
          <p className="timeline-text">
            Completed the Skyscanner Software Engineering Virtual Internship, building scalable web and API solutions. Gained practical experience in frontend UI development and backend service integration.
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title"><span>Web designer</span></h4>
          <span>2024 — present</span>
          <p className="timeline-text">
          Designed and developed responsive and user-friendly websites using modern web technologies. Focused on clean UI, accessibility, and optimal user experience across devices.
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title"><span>DSA & Development </span></h4>
          <span>2025 — present</span>
          <p className="timeline-text">
         Completed structured DSA training under Alpha 7.0 program, enhancing core problem-solving skills using Java. Practiced over 150+ problems on platforms like LeetCode and GFG.
          </p>
        </li>
      </ol>
    </section>

    {/* Skills Section */}
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Web design</h5>
            <data value="80">80%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '80%' }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Frontend Development</h5>
            <data value="70">70%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '70%' }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Full Stack Development</h5>
            <data value="90">90%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '90%' }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Bakend / Ai Tools/ APIs</h5>
            <data value="50">50%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '50%' }}></div>
          </div>
        </li>
      </ul>
      {/* // button */}
     <div className="my-contact-container">
  <button
    onClick={() => window.open("https://your-resume-link.com", "_blank")}
    className="my-resume-btn"
  >
    Click Resume
  </button>
</div>



    </section>
  </article>
);

// Portfolio Page Component


// Blog Page Component


export default App;
