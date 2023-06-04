import "./intro.scss";
// import { init } from 'ityped';
// import { useEffect , useRef } from "react";
import Typewriter from "typewriter-effect";


const Intro = () => {
  // export default function Intro(){
  // const textRef=useRef();

  // useEffect(() => {
  //   init(textRef.current, {showCursor: true,
  //     strings:["Developer", "Designer", "Content-Creator"],});
  // });

  return (
    <div className="intro" id="intro">
  <div className="left">
  <div className="imgcontainer">
    <img src="assets/frontend4.jpg" alt="" />
  </div>
  </div>
  <div className="right">
    <div className="wrapper">
    <h2>Hi There, I'm</h2>
    <h1>Hend Elazazzy</h1>
  <div className="hehe">
      <h3>Freelance <span id="haha"><Typewriter
  
      options={{ 
        strings:["Developer", "Designer", "Content Creater"],
        autoStart:true,
        delay:75,
        loop:true
        }}
      />
      </span></h3>
  </div>
    </div>
    <a href="#portfolio">
    <img src="assets/down1.jpg" alt="" />
    </a>
    </div>
    </div>
    
  );
}

export default Intro;
