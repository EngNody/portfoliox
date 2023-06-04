import { useState } from "react";
import "./works.scss"
// import ArrowForwardIosIcon from '@material-ui/icons';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Works = () => {
  const [currentSlider,setCurrentSlider] = useState(0);
  const data=[
    {      
    id:"0",
    icon:"assets/globe.jpg",
    title:"Web Design",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img:"assets/web2.jpg",},
    {    
    id:"1",
    icon:"assets/mobile3.jpg",
    title:"Mobile Application",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img:"assets/oip (7).jpg",},
    {
      id:"2",
      icon:"assets/writting3.jpg",
      title:"Branding",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img:"assets/web.jpg",
    }
  ]
const handleClick=(way)=>{
  way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2):
  setCurrentSlider(currentSlider<data.length -1 ?currentSlider +1 :0)
}
  return (
    <div className="works" id="works">

    <div className="slider"
     style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
{ data.map((d,i) => (
    <div className="container" id={d.id} key={i}>
    <div className="item">
      <div className="left">
      <div className="leftcontainer">
        <div className="imgcontainer">
        <img src={d.icon} alt="" className="myicon"/>
        </div>
        <h2>{d.title}</h2>
        <p>{d.desc}</p>
          <span>Projects</span>
      </div>

      </div>
      <div className="right">
      <img src={d.img} alt="" />
      </div>
    </div>
    </div>
  ))}

    </div>
      <img src="assets/white-down-arrow-png-2.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/white-down-arrow-png-2.png" className="arrow right" alt="" onClick={()=>handleClick("")}/>


      </div>
  );
}

export default Works;
