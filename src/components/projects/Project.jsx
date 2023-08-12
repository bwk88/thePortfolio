import React, { useEffect, useRef, useState } from 'react'
import './project.scss'
import { useInView } from 'react-intersection-observer'
import { motion as m } from 'framer-motion';
import { GitHub } from '@mui/icons-material';


function useMouse(){
    const [mousePosition, setMousePosition] = useState({
        x : null,
        y : null
    })

    useEffect(()=>{
        function handle(e){
            setMousePosition({
                x : e.pageX/2,
                y : e.pageY/2
            })
        }
        document.addEventListener("mousemove", handle);
        return ()=> document.removeEventListener("mousemove",handle)
    })
    return mousePosition
}


const Project = ({topBar,setTopBar ,className}) => {
    const [ref,isInView] = useInView();
    const [info,setInfo] = useState(false);
    // const [infoRef,isInInfo] = useInView();
    // const [ypixel,setYpixel] = useState(false);

    // var {x,y} = useMouse();
    // if(isInInfo){
    //     console.log("true")
    // }
    // var viewportOffset = document.getBoundingClientRect();
    // console.log(window.getBoundingClientRect())

    // console.log(viewportOffset);
    // const box = document.querySelector("div.info");
    // const pro = document.querySelector("div.project");
    // const wid = pro.getBoundingClientRect().bottom
    // console.log(wid - box.getBoundingClientRect().bottom);
    // const diff = wid - box.getBoundingClientRect().bottom;

    const handle = () =>{
        setInfo(info=>!info);
    }

    const hover = () =>{
        return{
            x:50,
            // scale:1.2,

            // opacity:0.4,
            transition:{duration:0.5},
        }
    }

    const hoverDot = () =>{
        return{
            opacity:0.5
        }
    }

    useEffect(()=>{
        if(isInView){
            setTopBar(false);
        }else{
            setTopBar(true);
        }
    },[isInView])
  return (
    
    <div  className= {"project " + (isInView && "active")}>
            <m.div            
            ref = {ref} 
            className="work work-1"
            initial={{opacity:0, y:75}}
            animate={isInView && {opacity:1, y:0}}
            transition={{duration:0.5, delay:0.8}}
            > 
                <m.div className="container"onMouseEnter={handle} onMouseLeave={handle} whileHover={hover()}>
                <span >GYM-APP</span>
                    
                    <span className='tech'>
                        React | Material UI
                    </span>
                </m.div>

                <a href="#b"><GitHub className='icon'  /></a>
            </m.div>

        
        
        
        
        <m.div 
        className="work"
        initial={{opacity:0, y:75}}
        animate={isInView && {opacity:1, y:0}}
        transition={{duration:0.5, delay:0.8}}
        >
        <m.div className="container"
        onMouseEnter={handle}
        onMouseLeave={handle} 
        whileHover={hover()}
        >
            <span >CAM OBJECT DETECT</span>
                
            <span className='tech'>
                Python | OpenCV
            </span>
            </m.div>
            <a href="#b">
                <GitHub className='icon'  />
            </a>
        </m.div>




        <m.div className="work" id='dfu-border'

        style={{borderBottom:'none'}}

        initial={{opacity:0, y:75}}
        animate={isInView && {opacity:1, y:0}}
        transition={{duration:0.5, delay:1.0}}
        >
        <m.div className="container" onMouseEnter={handle} onMouseLeave={handle} whileHover={hover()}>
            <span >DFU APP</span>
                
            <span className='tech'>
                FastPI | React Native | Deep Learning | Medical 
            </span>
        </m.div>
        <a href="#b">
            <GitHub className='icon'  />
        </a>
        </m.div>

        {/* <m.div

        className="dots"
        >


        </m.div> */}
        
        
        {/* <m.div ref={infoRef}
                style={{ display:!info ? "none" : " ",left: `${x+300}px` , top:`${y-80}px`}} 
                className="info">
            <img src="assets/website-1.jpg" alt="" />
        </m.div> */}

    </div>
  )
}

export default Project