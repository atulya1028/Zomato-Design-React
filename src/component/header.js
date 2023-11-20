import {useState,useEffect} from 'react';
import location from '../assets/img/icons/location.png';
import ArrowDown from '../assets/img/icons/arrow_down.png';
import Search from '../assets/img/icons/search.png';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const [heading, setHeading] = useState(props.title);

  useEffect(() => {})

  return (
     <header className="header1">
      <h1>{props.title}</h1>
    <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
      alt="zomato"/>
    <div className="div1">
      <img src={location} alt="Location" width="30px"/>
      <input type="text" placeholder="Block-B, Someshwarpuri, |" 
      style={{border: 'none', outline: 'none'}}/>
      <img src={ArrowDown} alt="" width="30px"/>
      <span style={{color:'grey'}}>|</span>
      <span style={{width:'20px'}}></span>
      <img src={Search} alt="" width="15px"/>
      <input className="input1" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
    </div>
    <Link to="/login" className="a1">Log in</Link>
    <a href="#signup" className="a1">Sign up</a>
  </header>
  );
}

export default Header;

