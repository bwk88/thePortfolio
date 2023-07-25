import React from 'react'
import "./intro.scss"
// import { init } from 'ityped'
// import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import TextSpan from './TextSpan';
import Reveal from '../../Reveal';

export default function Intro() {
  const name = "Biwek Dusadh".split("");
  return (
    <div className="intro" id = "intro">

      <div className="left">

        <div className='circleAnimate'>
          <motion.div className="imgContainer"
            // initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: [0.1,1.001,0.9,1.0001,1]
            }}
            // transition={{
            //   duration: 0.8,
            //   delay: 0.5,
            //   ease: [0.9, 0.71, 0.2, 1.01]
            // }}
            // animate={{ y: [null, 100, 0] }}
            transition={{ease: "easeOut",duration: 2.5}}
          />
          <img src="assets/profile-img.png" alt="" />
        </div>
        
      </div>

      <div className="right">
        <div className="wrapper">
          <Reveal>
          <h2>
            Hi there, i'm
          </h2>
          </Reveal>
          <h1>
            {name.map((letter,index)=>{
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              )
            })}
          </h1>
          <h3>Freelancer <span className='op'>I</span> <span><Typewriter options={{ strings: [' Developer', ' Designer', ' Content Creator'], autoStart: true, loop: true,}}/> </span></h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
