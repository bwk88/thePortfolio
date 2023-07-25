import React, { useEffect, useRef, useState } from 'react'
import './home.scss'
import Lottie from 'lottie-react'
import pattern from "../home/animate.json";
import animationData from "../home/pattern-animation.json";
import {motion as m} from 'framer-motion'
import Unravel from './Unravel';



const Home = () => {
  const [currAnimation,setCurrAnimation] = useState(animationData);
  const designref = useRef();

  useEffect(()=>{
    designref.current.setSpeed(1.1);
  })
  return (
    <div className="intro">
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
              style={{height:'700px', width:'700px',overflow:'hidden'}}
              animationData={currAnimation}/>
                <m.span
                      className='heroText'
                      variants={{
                        hidden: {opacity:0, y:75},
                        visible:{opacity:1, y:0}
                      }}
                      initial="hidden"
                      animate= "visible"
                      transition={{duration:0.7, delay:0.25}}
                      style={{overflow:"hidden"}}
                >
                  Biwek Dusadh
                <Unravel>
                </Unravel>

                </m.span>
              
            </div>
        </div>
        {/* <div className="line-2"></div> */}
    </div>
  )
}

export default Home;