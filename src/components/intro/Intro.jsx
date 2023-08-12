import{React,useState,useRef,useEffect} from 'react'
import "./intro.scss"
// import { init } from 'ityped'
// import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
// import { motion } from 'framer-motion';
import Lottie from 'lottie-react'
import TextSpan from './TextSpan';
import pattern from "../home/animate.json";
import animationData from "../home/pattern-animation.json";
import Reveal from '../../Reveal';
// import { useState } from "react";

export default function Intro() {
  const [currAnimation,setCurrAnimation] = useState(animationData);
  // const [newName,setNewName] = useState("BIWEKDUSADH");

  const designref = useRef();

  useEffect(()=>{
    designref.current.setSpeed(0.4);
  })

  const name = "Biwek Dusadh".split("");
  return (
    <div className="intro" id = "intro">

      <div className="left">

          <Lottie onClick={()=>{
            if(currAnimation === animationData){
              setCurrAnimation(pattern);
            }else{
              setCurrAnimation(animationData);
            }
          }} 
          onMouseEnter={()=>{
            designref.current.setSpeed(.1)
          }}
          onMouseLeave={()=>{
            designref.current.setSpeed(0.4);
          }}
          // interactivity={interactivity}
          lottieRef={designref}
          className='lottie'
          style={{height:'700px', width:'700px',overflow:'hidden',zIndex:''}}
          animationData={currAnimation}
          />
        
      </div>

      <div className="right">
        <div className="wrapper">
          <Reveal>
          <h2>
            Hi there, i'm
          </h2>
          </Reveal>
            <Reveal>
            <h1>
              {name.map((letter,index)=>{
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                )
              })}
            </h1>
          </Reveal>
          <Reveal>

          <h3>Freelancer <span className='op'>I</span> <span><Typewriter options={{ strings: [' Developer', ' Designer', ' Content Creator'], autoStart: true, loop: true,}}/> </span></h3>
          </Reveal>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
