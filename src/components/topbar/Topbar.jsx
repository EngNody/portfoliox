import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons';


// const Topbar = () => {
 export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // <div className="topbar">
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="#intro" className="logo">NODE .</a>
        <div className="itemcontainer">
        <Person className="icon"/>
        <span>+201558325343</span>
        </div>
        <div className="itemcontainer">
        <Mail className="icon" />
        <span>totatota1990253@gmail.com</span>
        </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>

          </div>
        </div>
    </div>
</div>

  );
}

// export default Topbar;
