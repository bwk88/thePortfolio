import React from 'react'
import "./menu.scss"

export default function Menu({open,set}) {
  return (
      <div className={"menu " + (open && "active")} >
          <ul>
            <li onClick={()=>set(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>set(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>set(false)}>
                <a href="#works">Works</a>
            </li>
            {/* <li onClick={()=>set(false)}>
                <a href="#testimonials">Testimonials</a>
            </li> */}
            <li onClick={()=>set(false)}>
                <a href="#contact">Contact</a>
            </li>
          </ul>
      </div>
  )
}
