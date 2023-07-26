import React, { useEffect, useState } from 'react'
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
    const [infoRef,isInInfo] = useInView();
    const [info,setInfo] = useState(false);
    // const [ypixel,setYpixel] = useState(false);

    var {x,y} = useMouse();
    if(isInInfo){
        console.log("true")
    }
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
            opacity:0.4,
            transition:{duration:0.5},
        }
    }

    useEffect(()=>{
        if(isInView){
            setTopBar(false);
        }else{
            setTopBar(true);
        }
    })
  return (
    
    <div  className= {"project " + (isInView && "active")}>
        <div ref = {ref} className="work">
            <m.span
                onMouseEnter={handle}
                onMouseLeave={handle}
                whileHover={hover()}
            >
                GYM-APP
            </m.span>
            <a href="#b">
                <GitHub className='icon' style={{color:'white'}} />
            </a>
        </div>
        <div className="work">
            <m.span
                onMouseEnter={handle}
                onMouseLeave={handle}
                whileHover={hover()}
            >
            COVID DATA
            </m.span>
            <a href="#b">
                <GitHub className='icon' style={{color:'white'}} />
            </a>
        </div>
        <div className="work">
            <m.span
                onMouseEnter={handle}
                onMouseLeave={handle}
                whileHover={hover()}
            >
            DFU DETECTION 
            </m.span>
            <a href="#b">
                <GitHub className='icon' style={{color:'white'}} />
            </a>
        </div>

        <m.div
        ref={infoRef}
        style={{
        display:!info ? "none" : " ",
        left: `${x+300}px` 
         , top:`${y-80}px`}} 
        className="info">
            {/* <span>A gym React app that gives functionality to choose exercise catagories and specific muscle group.User Interface is build
            using Material UI.</span>

            <span>More than 1000 exercises can be browsed with practical example(GIF and youtube videos).</span>

            <span>For each exercise simillar exercises are recomended and You Tube videos that are fetched using API are shown</span> */}

            <div className="circle"></div>
        </m.div>
    </div>
  )
}

export default Project