import React from "react";
import "../Styles/About.css";
import profileImage from "../Images/headshot.JPEG";
import Connect from "../Components/Connect";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
          Hey there! I’m a Computer Science major with a passion for blending logic and creativity. I’m fascinated by Machine Learning (I even took a course on it!) and love diving into web development projects that challenge me to think outside the box. I also have experience in UI/UX design, where I enjoy creating intuitive and engaging user experiences that bring ideas to life.
          </p>
          <p>
          Creativity fuels everything I do — whether I’m designing sleek user interfaces or getting my hands messy with pastels (my absolute favorite art medium!). Outside of coding and art, you’ll probably find me baking chocolate chip cookies or spending time with my family. I’m all about balancing analytical thinking with a creative spark, and I’m always excited to build something that’s both smart and visually engaging!
          </p>

          {/* Replacing the LinkedIn button with the Connect component */}
          <Connect />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
