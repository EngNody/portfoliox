
// import portfoliolist from "../portfoliolist/Portfoliolist";
// import { useState } from "react";
import {useEffect,useState} from "react";
import Fefalist from "../fefalist/Fefalist"
import "./portfolio.scss";
import {featuredfefa,webfefa,mobilefefa,designfefa,contentfefa} from "../../data"

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData ] = useState([]);

  const list = [
    {
      id:"featured",
      title:"Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile"
      ,title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    }
  ];
  useEffect(()=>{

switch (selected) {
  case "featured":
    setData(featuredfefa);
    break;

    case "web":
      setData(webfefa);
      break;

      case "mobile":
        setData(mobilefefa);
        break;

        case "design":
          setData(designfefa);
          break;
          case "content":
            setData(contentfefa);
            break;
  default:
    setData(featuredfefa);
    break;
}
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>

      {list.map((item,i) => (
        <Fefalist title={item.title} active={selected === item.id} 
        setSelected={setSelected} id={item.id} key={i}/> 
        ))}

      </ul>
      <div className="container">

    {data.map((d,i) => (
      <div className="item" id={d.id} key={i}>
      <img src={d.img} alt={d.title}/>
      <h3>{d.title}</h3>
      </div>
    ))}
      </div>
    </div>
    
  );
}


// <div className="item">
// <img src="assets/teck3.jpg" alt="" />
// <h3>Banking App</h3>
// </div>
// <div className="item">
// <img src="assets/teck3.jpg" alt="" />
// <h3>Banking App</h3>
// </div>
// <div className="item">
// <img src="assets/teck3.jpg" alt="" />
// <h3>Banking App</h3>
// </div>
// <div className="item">
// <img src="assets/teck3.jpg" alt="" />
// <h3>Banking App</h3>
// </div>
// <div className="item">
// <img src="assets/teck3.jpg" alt="" />
// <h3>Banking App</h3>
// </div>