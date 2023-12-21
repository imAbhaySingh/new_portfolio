import React from 'react'
import './skills.css'
import UIDeisgn from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">
          <h1 className='skillsMain'>What I do </h1>
          <span className="skillsDesc">
            I am skilled and apssionate desginer with experience in creatinh visually appealing ans user friendly wevistes. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and React.js, as well as design software such as adobe photoshop and Illustrator.
            <div className="skillsBars">
              <div className="skillBar">
                <img src={UIDeisgn} alt="" className="skillBarImg" />
                <div className="skillBartext">
                  <h2>UI/UX Design</h2>
                  <p>Write some content here !</p>
                </div>
              </div>
              <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBartext">
                <h2>Web Development</h2>
                  <p>Write some content here !</p>
                </div>
              </div>
              <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBartext">
                <h2>Data Structures</h2>
                  <p>Write some content here !</p>
                </div>
              </div>
            </div>
          </span>
        </span>
    </section>
  )
}

export default Skills