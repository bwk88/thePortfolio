import React, { useEffect, useRef, useState } from 'react'
import './home.scss'
import Lottie from 'lottie-react'
import pattern from "../home/animate.json";
import animationData from "../home/pattern-animation.json";
import {motion as m} from 'framer-motion'
import Unravel from './Unravel';



const Home = () => {
  const [currAnimation,setCurrAnimation] = useState(animationData);
  // const [newName,setNewName] = useState("BIWEKDUSADH");

  const designref = useRef();
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // const name = "BIWEKDUSADH";
  // console.log(name.length);

  
  
    // const hack= ()=>{
    //   let iteration = 0;

    //   const interval = setInterval(()=>{
    //     let morphed = newName.split("").map((letter,index) =>{
    //       if(index < iteration){
    //         return name[index];
    //       }
    //       return letters[Math.floor(Math.random()*26)]
    //     }).join("");

    //     setNewName(morphed);
    //     console.log(morphed);
    //     if(iteration >= name.length) clearInterval(interval);
    //     iteration += 1/3;
    //     // console.log(iteration);
    //   },30)
    // }
  
  useEffect(()=>{
    designref.current.setSpeed(1.1);
  })
  return (
    <div className="intro">
      <div className="line-1"></div>
        <div className="container">
            <div className="lottie">
              <Lottie onClick={()=>{
                if(currAnimation === animationData){
                  setCurrAnimation(pattern);
                }else{
                  setCurrAnimation(animationData);
                }
              }} 
              onMouseEnter={()=>{
                designref.current.setSpeed(.5)
              }}
              onMouseLeave={()=>{
                designref.current.setSpeed(1.1);
              }}
              // interactivity={interactivity}
              lottieRef={designref}
              style={{height:'700px', width:'700px',overflow:'hidden',zIndex:''}}
              animationData={currAnimation}
              />
                <h1 className='nameText'>
              Developer.Frontend
              </h1> 
            </div>

            <m.span 
                  className='heroText'
                  variants={{
                    hidden: {opacity:0, y:75},
                    visible:{opacity:1, y:0}
                  }}
                  initial="hidden"
                  animate= "visible"
                  transition={{duration:0.7, delay:0.25}}
                  style={{overflow:"hidden"}}>

              <h1 className='nameText'>
              {/* Developer.Frontend */}
              </h1> 

            <Unravel>
            </Unravel>

            </m.span>
        </div>
        <div className="line-2"></div>
    </div>
  )
}

export default Home;