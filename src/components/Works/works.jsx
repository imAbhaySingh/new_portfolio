import React from "react";
import "./works.css";
import Mediwrite from "../../assets/lotus.png";
import Karuda from "../../assets/logo2.png";
import Sign from "../../assets/sign.png";
import Weather from "../../assets/weather.png";
import Cipher from "../../assets/cipher.png";
import Pass from "../../assets/pass.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="workDesc">
        I take pride in paying attenion to the smallest details and making sure
        that my work is pixel perfect. O am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <div className="worksdiv MediWrite">
          <img src={Mediwrite} alt="" className="worksImg" />
          <h2>MediWrite</h2>
          <div className="container1">
            <h1>Description</h1>
            <h3>
            Mediwrite swiftly enhances emergency response through cutting-edge identity detection tech, automating the delivery of vital medical information to families and police for more efficient and timely assistance.
            </h3>
            <a
              href="https://master.d29xsankg2s1yy.amplifyapp.com/"
              target="blank"
            >
              <button>Dive In</button>
            </a>
          </div>
        </div>
        <div className="worksdiv Karuda">
          <img src={Karuda} alt="" className="worksImg" />
          <h2>Karuda</h2>
          <div className="container2">
            <h1>Description</h1>
            <h3>
            Mediwrite streamlines emergency response with cutting-edge identity detection, automating medical information delivery to families and law enforcement, improving efficiency in crucial information dissemination during emergencies.
            </h3>
            <a
              href="https://master.d2hnfzwotu1llr.amplifyapp.com/"
              target="blank"
            >
              <button>Dive In</button>
            </a>
          </div>
        </div>
        <div className="worksdiv Weather">
          <img src={Weather} alt="" className="worksImg" />
          <h2>Weather App</h2>
          <div className="container4">
            <h1>Description</h1>
            <h3>
            Created a user-friendly weather app that delivers accurate forecasts, real-time updates, and personalized insights, providing users with a seamless and informed weather experience anytime, anywhere.
            </h3>
            <a
              href="https://master.d31m0ic3gz9bz9.amplifyapp.com/"
              target="blank"
            >
              <button>Dive In</button>
            </a>
          </div>
        </div>

        <div className="worksdiv Sign">
          <img src={Sign} alt="" className="worksImg" />
          <h2>Sign Language Translater</h2>
          <div className="container3">
            <h1>Description</h1>
            <h3>
            Developing an innovative sign language translator app to bridge communication gaps between deaf individuals and the hearing community, fostering inclusivity and understanding through intuitive gesture recognition technology.
            </h3>
            <a
              href="https://github.com/imAbhaySingh/Sign-language-translater"
              target="blank"
            >
              <button>Dive In</button>
            </a>
          </div>
        </div>
        
        <div className="worksdiv Cipher">
          <img src={Cipher} alt="" className="worksImg" />
          <h2>Cipher</h2>
          <div className="container5">
            <h1>Description</h1>
            <h3>
            Implemented a Caesar Cipher project, an encryption technique, to enhance data security by shifting characters, offering a simple yet effective method for secure communication in various applications.
            </h3>
            <a
              href="https://github.com/imAbhaySingh"
              target="blank"
            >
              <button>Dive In</button>
            </a>
          </div>
        </div>
        <div className="worksdiv Pass">
          <img src={Pass} alt="" className="worksImg" />
          <h2>Password Generator</h2>
          <div className="container6">
            <h1>Description</h1>
            <h3>
            Developing a robust password generator project to enhance digital security, creating complex and randomized passwords for users to safeguard their online accounts from unauthorized access.
            </h3>
            <a
              href="https://github.com/imAbhaySingh"
              target="blank"
            >
              <button>Dive In</button>
            </a>
          </div>
        </div>
      </div>
      <button className="worksBtn">
        <a className="ProjectLink" href="https://github.com/imAbhaySingh" target="blank">
          See More
        </a>
      </button>
    </section>
  );
};

export default Works;
