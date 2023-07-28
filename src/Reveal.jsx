import React ,{ useEffect,useRef } from 'react'
import { motion as m, useAnimation, useInView} from 'framer-motion'

const Reveal = ({children,width = "fit-content"}) => {
  const ref= useRef(null);
  const isInView = useInView(ref,{once: true});
  // console.log(isInView)

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
      slideControls.start("visible");
    }
  },[isInView]);

  return (
    <div ref={ref} style={{position:"relative",width,overflow:"hidden"}}>
      <m.div
      variants={{
        hidden: {opacity:0, y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
      animate= {mainControls}
      transition={{duration:0.5, delay:0.25}}
      >
        {children}
      </m.div>

      <m.div
        variants={{
          hidden: {left: 0},
          visible:{left: "100%"},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration :0.5,ease:"easeIn"}}
        style={{
          position:"absolute",
          top:4,
          bottom:4,
          left:0,
          right:0,
          background:"#15023a",
          // opacity:0.8,
          zIndex:20,
        }}
      />
       
    </div>
  )
}

export default Reveal