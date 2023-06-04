import "./testmonials.scss"

const Testmonials = () => {
  const data=[
    {      id: 1,
      name:"Tom Durdan",
      title: "Senior Developer",
      img:"assets/oip (10).jpg",
      icon:"assets/twiter.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores facilis nam nisi fuga. "
},
    {      id: 2,
      name:"Alex Kalinski",
      title: "CO-Founder of Delka",
      img:"assets/oip (11).jpg",
      icon:"assets/youtupe.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores facilis nam nisi fuga. ",
      featured:"true",
    },
    {
      id: 3,
      name:"Martin Harold",
      title: "CEO of ALBI",
      img:"assets/oip (13).jpg",
      icon:"assets/linked in.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores facilis nam nisi fuga. "

    },
  ]
  return (
    <div className="testmonials" id="testmonials">
       <h1>Testmonials</h1>

       <div className="container">

    {data.map((d,i) => ( 
      <div className={d.featured ? "card featured" : "card"} id={d.id} key={i}>
        <div className="top">
        <img className="left" src="assets/right.jpg" alt="" /> 
        <img className="user" src={d.img} alt="" />
        <img className="right" src={d.icon} alt="" />
        </div>
        <div className="center">
          {d.desc}
        </div>
        <div className="buttom">
        <h3>{d.name}</h3>
        <h4>{d.title}</h4>
        </div>
      </div>
    ))}
    </div>


      
    </div>
  );
}

export default Testmonials;
