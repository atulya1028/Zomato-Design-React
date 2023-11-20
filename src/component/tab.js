import { Link } from 'react-router-dom';

const Tabs = () => {
    return(
        <>
          <div style={{height:'30px'}}></div>
  <div style={{paddingLeft:'80px'}}>

   <nav>
   <ul>
       <li><Link to='/'>Home</Link> /</li>
       <li><Link to='/about-us'>About</Link> /</li>
      <li>India /</li>
      <li>Jaipur /</li>
      <li style={{color: 'gainsboro'}}>Malviya Nagar Restaurants</li>
    </ul>
   </nav>
  </div>
        </>
    );
}

export default Tabs;