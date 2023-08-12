import { useState,useRef, useEffect } from "react";

import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
// import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Project from "./components/projects/Project";
import Intro from "./components/intro/Intro"
import "./app.scss";

// import AnimatedCursor from 'react-animated-cursor'

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [topBar,setTopBar] = useState(true);

  return (
    <div className="app">
        {/* <AnimatedCursor color="#fff"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={3.7}
        outerAlpha={0}
        hasBlendMode={false}
        innerStyle={{
        backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
        // border: '2px solid var(--cursor-color)',
        mixBlendMode: 'exclusion',
        backgroundColor: '#fff'
        }}/> */}

        <Topbar open = {menuOpen} 
        set = {setMenuOpen} 
        topBar={topBar}
        // setTopBar={setTopBar}
        className = 'active'
        />
        <Menu open = {menuOpen} set = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        {/* <Home /> */}
        <Portfolio/>
        {/* <Works className='workPage' topBar={topBar} setTopBar={setTopBar} /> */}
        <Project topBar={topBar} setTopBar={setTopBar} />
        {/* <Testimonials/> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
