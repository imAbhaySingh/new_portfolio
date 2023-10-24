import React from 'react'
import './contact.css'
import Twitter from "../../assets/twitter.png"
import Instagram from "../../assets/instagram.png"
import Youtube from "../../assets/youtube.png"

const Contact = () => {
    return (
        <section id="contact">
            <div className="contactTitle">Contact Me</div>
            <div className="contactDesc">Please fill out the form to discuss any work opportunities.</div>
            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='send'>Submit</button>
                <div className="links">
                    <img src={Twitter} alt="" className="link" />
                    <img src={Instagram} alt="" className="link" />
                    <img src={Youtube} alt="" className="link" />
                </div>

            </form>
        </section>
    )
}

export default Contact;