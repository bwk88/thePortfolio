import React from 'react'
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({open,set,className,topBar}) {
  return (
    <div className={"topbar " + ((open && `${className}`) || (!topBar && "switch")) }> 

      <div className="wrapper">

        <div className="left">
          <a href="#intro" className='logo' >biwek.</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+91 8638720449 </span>
            </div>  
          <div className="itemContainer">  
            <Mail className="icon"/>
            <span>biwekdusadh8@gmail.com</span>
          </div> 
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>set(!open)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>


      </div>

    </div>
  )
}
