import React, { useEffect } from 'react'
import './project.scss'
import { useInView } from 'react-intersection-observer'

const Project = ({topBar,setTopBar ,className}) => {
    const [ref,isInView] = useInView();

    useEffect(()=>{
        if(isInView){
            setTopBar(false);
        }else{
            setTopBar(true);
        }
    })
  return (
    
    <div ref = {ref} className= {"project " + (isInView && 'active')}>
        <div className="work-1">
            <span>
                Work-1
            </span>
        </div>
        <div className="work-2">
            <span>
            Work-2
            </span>
        </div>
        <div className="work-3">
            <span>
            Work-3
            </span>
        </div>

        <div className="info">
            information card
        </div>
    </div>
  )
}

export default Project