import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Header from '../component/header';
import Tabs from '../component/tab';
const restaurants = [
    {
        id:1,    
        img: 'https://b.zmtcdn.com/data/dish_photos/96c/af2f066811b0f1c2b28295bc689d596c.jpg',
        remark: 'Promoted',
        name:'Bonkey\'s Pizza',
        types:'Pizza, Pasta, Fast Food, S...',
        rating:'4.0',
        price:550,
        distance:'36 min'
    },
    {
        id:2,
        img: 'https://b.zmtcdn.com/data/dish_photos/0db/39e8f7a1cb3398d997ce415cc86210db.jpg',
        remark: '',
        name:'Domino\'s Pizza',
        types:'Pizza, Fast Food',
        rating:'4.1',
        price:550,
        distance:'25 min'
    },
    {
        id:3,
        img: 'https://b.zmtcdn.com/data/pictures/2/20010952/a7493d2af4901b1ed556e734aa4d7c00_o2_featured_v2.jpg',
        remark: 'Promoted',
        name:'Gazebo - The Sushi Company',
        types:'Japanese, Sushi, Chinese, ...',
        rating:'4.1',
        price:550,
        distance:'30 min'
    },
    {
        id:4,
        img: 'https://b.zmtcdn.com/data/pictures/chains/9/19526949/b62a5cf0ae92446aef6425255d0b6890_o2_featured_v2.jpg',
        remark: '',
        name:'Kwality Wall\'s Frozen Dessert...',
        types:'Ice Cream, Desserts',
        rating:'4.5',
        price:100,
        distance:'27 min'
    },
    {
        id:5,
        img: 'https://b.zmtcdn.com/data/pictures/chains/8/100148/49dbb6b8db9bd82a41a79d573643f4fa_o2_featured_v2.jpg',
        remark: '',
        name:'Kanha',
        types:'Mithai, Street Food, North...',
        rating:'4.2',
        price:100,
        distance:'24 min'
    },
    {
        id:6,
        img: 'https://b.zmtcdn.com/data/pictures/2/20533712/15819424865ca964a9bec3705fd295a3_o2_featured_v2.jpg',
        remark: '',
        name:'Khandelwal Dhaba',
        types:'South Indian, Chinese, Str...',
        rating:'3.7',
        price:100,
        distance:'37 min'
    },
];

export default function Pizza() {

    const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <>
    <Header />
    <Tabs />
    <div style={{ width: '100%', paddingLeft: '100px' }}>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Delivery' ? 'active' : ''}`}
              onClick={() => setActiveTab('Delivery')}
              href="#delivery"
              style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'yellow' }}>
                <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                  alt="delivery" width="50px" />
              </div>
              &nbsp;
              Delivery
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Dining Out' ? 'active' : ''}`}
              onClick={() => setActiveTab('Dining Out')}
              href="#diningout" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'ghostwhite' }}>
                <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                  alt="Dining Out" width="50px" />
              </div>
              &nbsp;
              Dining Out
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Nightlife' ? 'active' : ''}`}
              onClick={() => setActiveTab('Nightlife')}
              href="#nightlife" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'ghostwhite' }}>
                <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                  alt="nightlife" width="50px" />
              </div>
              &nbsp;
              Nightlife
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="div-btn">
        <div style={{ border: '1px solid gainsboro', borderRadius: '5px', padding: '5px' }}>
          <img src="img/icons/filter.png" alt="" width="20px" />
          Filters
        </div>
        <div style={{ border: '1px solid gainsboro', borderRadius: '5px', padding: '5px' }}>
          Rating: 4.0+
        </div>
        <div style={{ border: '1px solid gainsboro', borderRadius: '5px', padding: '5px' }}>
          Pure Veg
        </div>
        <div style={{ border: '1px solid gainsboro', borderRadius: '5px', padding: '5px' }}>
          Cuisines
          <img src="img/icons/down-arrow.png" alt="" width="20px" />
        </div>
      </div>
      <div style={{height:'30px'}}></div>
      <div style={{marginLeft:'75px', fontSize:'30px', fontWeight:'bold'}}>Delivery Restaurants in Malviya Nagar</div>
      <div style={{ height: '30px' }}></div>
    <div className='grid-container'>
      {restaurants.map((restaurant) => (
        <div className="grid-container" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <div style={{ width: '320px', padding: '10px' }} className="card-box">
            <div>
              <div style={{
                position: 'absolute',
                paddingLeft: '5px',
                paddingTop: '2px',
                paddingRight: '5px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                color: '#fff',
                borderRadius: '10px',
                marginLeft: '10px',
                marginTop: '10px',
                fontSize: '10px',
              }}>{restaurant.remark ? restaurant.remark : ''}</div>
              <img src={restaurant.img} alt="" style={{ width: '300px', height: '250px', borderRadius: '10px' }} />
            </div>
            <br />
            <div className="rating-style">
              <div style={{fontWeight:'bold'}}>{restaurant.name}</div>
              <div className="rating-div">{restaurant.rating} <i className="fa-solid fa-star"></i></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '13px' }}>{restaurant.types}</div>
              <div style={{ fontSize: '13px' }}><FontAwesomeIcon icon={faIndianRupeeSign} />{restaurant.price} for one</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <div style={{ fontSize: '13px' }}>{restaurant.distance}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div style={{height:'100px'}}></div>
    </>
  )
}
