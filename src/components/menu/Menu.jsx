import {React,useState} from 'react'
import "./menu.scss"

export default function Menu({open,set}) {
  const [newName,setNewName] = useState("HOME");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const name = "HOME";
  console.log(name.length);

  
  
    const hack= ()=>{
      let iteration = 0;

      const interval = setInterval(()=>{
        let morphed = newName.split("").map((letter,index) =>{
          if(index < iteration){
            return name[index];
          }
          return letters[Math.floor(Math.random()*26)]
        }).join("");

        setNewName(morphed);
        console.log(morphed);
        if(iteration >= name.length) clearInterval(interval);
        iteration += 1/2;
        // console.log(iteration);
      },90)
    }
  return (
      <div className={"menu " + (open && "active")} >
          <ul>
            <li 
            onClick={()=>set(false)}
            onMouseOver={hack}
            >
                <a href="#intro">{newName}</a>
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
