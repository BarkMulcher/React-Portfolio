import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import sheltr from '../../src/sheltr.png';
import indexmori from '../../src/indexmori.jpg';


export default function Content() {
  const fullCard = useRef(null);
  const heading = useRef(null);
  const dividerLine = useRef(null);
  const paragraph = useRef(null);
  const socialIcons = useRef(null);
  // const card1 = useRef(null);
  // const card2 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ ease: "sine.out" });
    timeline
      .from(fullCard.current, {
        delay: 4,
        translateY: -50,
        duration: 0.4,
        opacity: 0,
      })
      .from(socialIcons.current, {
        translateY: -20,
        opacity: 0,
        duration: 0.5,
      })
      .from(heading.current, {
        translateY: -20,
        opacity: 0,
        duration: 0.4,
      })
      .from(dividerLine.current, {
        width: 0,
        duration: 0.5,
      })
      .from(paragraph.current, {
        opacity: 0,
        translateY: 40,
        duration: 0.4,
        ease: "none",
      })
      // .from([card1.current, card2.current], {
      //   opacity: 0,
      //   translateY: 40,
      //   duration: 0.4,
      //   stagger: 0.1,
      //   ease: "none",
      // });
  });

  return (
    <section className="main_card" ref={fullCard}>
      <div className="social_icons" ref={socialIcons}>
        <a
          href="https://linkedin.com/Lucas-Haskell"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin_logo"
          aria-label="LinkedIn profile"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/BarkMulcher"
          target="_blank"
          rel="noopener noreferrer"
          className="github_logo"
          aria-label="Github profile"
        >
          <FaGithub />
        </a>
      </div>
      <section className="container">
        <h1 className="name primary" ref={heading}>
          Hi, i'm Lucas Haskell<span className="highlighted">.</span>
        </h1>
        <div className="divider highlighted_bg" ref={dividerLine}></div>

        <section className="description secondary" ref={paragraph}>
          <p>
            I'm a Web & Software Developer. I am proficient in JavaScript and React. 
            I'm also learning Python. My arsenal includes shit like:
            <span className="highlighted"> React</span>,
            <span className="highlighted"> MongoDB</span>
          </p>
          <p>
            I'm currently finishing up a course in Python, and will be continuing my
            job search in August 2023. In the meantime, my inbox is always open:&nbsp;
            <a href="mailto:lucas.c.haskell@gmail.com" className="highlighted">
              lucas.c.haskell@gmail.com
            </a>
          </p>
          <p>These are some of my recent projects:</p>
        </section>
        <div className="projects">
          <div className="project_1 highlighted_bg project" >
          <a
              href="https://sheltr.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="sheltr.tech"
            >
              <img src={sheltr} alt="Sheltr.tech" />
            </a>
          </div>
          <div className="project_2 highlighted_bg project" >
          <a
              href="https://serene-shelf-90086.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Index Mori"
            >
              {/* // add your project cover image here  */}
              <img src={indexmori} alt="index mori" />
            </a> 
          </div>
            {/* ref={card1} ref={card2} <a
              href="https://sheltr.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="sheltr.tech"
            >
              <img src={require("../images/sheltr.png")} alt="Sheltr.tech" />
            </a>
          </div>
          <div className="project_2 highlighted_bg project" ref={card2}>
            <a
              href="https://serene-shelf-90086.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Index Mori"
            >
              // add your project cover image here 
              <img src={require("../images/indexmori.jpg")} alt="index mori" />
            </a> */}
          {/* </div> */}
        </div>
      </section>
    </section>
  );
}

