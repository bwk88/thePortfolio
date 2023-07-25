import React from 'react'
import "./contact.scss"
import Reveal from '../../Reveal'

export default function Contact() {
    return(
    <div className="contact" id = "contact">
        <div className="wrapper">
            <div className="heroContact">
                <Reveal>
                    <span>
                        Contact
                        <span className='dot'>.</span>
                    </span>
                </Reveal>
            </div>
            <Reveal>
                <div className="contactDesc">
                Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed.
                </div>
            </Reveal>
                <div className="mail">
            <Reveal>
                    <a href="biwek.">biwekdusadh8@gmail.com</a>
            </Reveal>
                </div>
        </div>
    </div>
    )
    
}