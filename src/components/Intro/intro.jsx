import React from "react";
import "./intro.css";
import bg from "../../assets/me-r.png";
// import bg from "../../assets/image1.png";
import btnImg from "../../assets/hireme.png"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Abhay</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled wev developer with experience in   creating <br/> visually appealing and user friendly websites.
        </p>
        <a href="https://drive.google.com/file/d/1RCdWBTVLwzaVF5UkGmO95w46mnhZXN28/view?usp=sharing" target="blank"><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Resume</button></a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
