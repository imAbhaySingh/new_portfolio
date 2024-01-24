import React, {useRef} from 'react'
import './contact.css'
import Twitter from "../../assets/twitter.png"
import Instagram from "../../assets/instagram.png"
import Youtube from "../../assets/youtube.png"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8dkbvz8', 'template_h6kr8kg', form.current, 'M9JrxGKQOcaPYRJFa')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Your message has been sent 😊");
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact">
            <div className="contactTitle">Contact Me</div>
            <div className="contactDesc">Please fill out the form to discuss any work opportunities.</div>
            <form ref={form } className='contactForm' onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message' ></textarea>
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