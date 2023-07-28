import React from 'react'
import "./portfolio.scss"
import Reveal from '../../Reveal'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">

      <div className="container">
        <div className="top">
          <Reveal>
            <h3>
                About <span>.</span>
            </h3>
          </Reveal>
          <div className="line"></div>
          {/* <span className='dot'>.</span> */}
        </div>

        <div className="about">
          <div className="aboutContainer">
            <div className="dec">
              <Reveal>
                <p className='firstPara'>Hey! I'm Biwek, if you haven't already gathered that by now. 
                 I love building visually appealling frontend products and design. Worked on a Machine learning model and integrating it into a mobile app for my Final Year Project. </p>
              </Reveal>
              <Reveal>
                  <p>
                Presently, working as a Member Research Staff at Bharat Electronics Limited, Ghaziabad ,India.
                
                </p>

              </Reveal>
               <Reveal>
                <p>
                Beyond coding and development i have a passion for playing music.
                I find solace and joy in creating soulful tunes, striking a harmonious balance between the analytical world of coding and the expressive realm of music
                </p>

               </Reveal>

                <Reveal>
                <p>
                A true sports lover, [Your Name] also holds a special place in [his/her] heart for football.
                As an avid football fan, [he/she] enjoys cheering for favorite teams, engaging in discussions about the beautiful game, and embracing the camaraderie of the sports community.
                </p>  

                </Reveal>
                
              </div>
              <Reveal>
                <div className="tags">
                  {/* <p>My Links &#8594;</p>
                  <a href="http://#">
                    <img src="assets/linkedin.png" alt="" />
                  </a>
                  <a href="http://#">
                    <img src="assets/github.png" alt="" />
                  </a>
                  <a href="http://#">
                    <img src="assets/leetcode.png" alt="" />
                  </a>
                  <a href="http://#">
                    <img src="assets/instagram.png" alt="" />
                  </a> */}
                </div>
              </Reveal>
          </div>
          <div className="skills">
            <div className="techStack">
              <Reveal>
                <h4>
                  <img src="assets/code.png" alt="" />
                  <span> Tech Stack </span>
                </h4>
              </Reveal>
              <Reveal>
                <div className="techContainer">
                  <span>C</span>
                  <span>C++</span>
                  <span>JavaScript</span>
                  <span>Typecript</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>NodeJS</span>
                  <span>Elastic Search</span>
                  <span>MS-SQL</span>
                  <span>FastAPI</span>
                  <span>Django</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Data Structure & Algo.</span>
                </div>
              </Reveal>
            </div>

            <div className="exp">
              <div className="techStack">
                <Reveal>
                  <h4>
                    <img src="assets/certificate.png" alt="" />
                    <span> Experience </span>
                  </h4>
                </Reveal>
                <Reveal>
                  <div className="techContainer">
                  <span>Deputy Engineer, BEL , Ghaziabad</span>
                  <span className='magic'>Intern at Samsung R&D Bangalore</span>
                  <span>Teaching Staff , NIT Silchar</span>
                  {/* <span>Typecript</span> */}
                </div>
                </Reveal>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}
