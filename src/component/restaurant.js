import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
const restaurants = [
    {
        id:1,    
        img: 'https://b.zmtcdn.com/data/pictures/chains/1/19838911/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg',
        remark: 'Promoted',
        name:'Starbucks Coffee',
        types:'Cafe, Beverages, Desserts...',
        rating:'4.2',
        price:300,
        distance:'20 min'
    },
    {
        id:2,
        img: 'https://b.zmtcdn.com/data/pictures/3/20734063/fe70bd593ead2bdc4b09a066468484fe_o2_featured_v2.jpg',
        remark: '',
        name:'Rawat Mishthan Bhandar',
        types:'Mithai, North Indian, South...',
        rating:'4.0',
        price:100,
        distance:'62 min'
    },
    {
        id:3,
        img: 'https://b.zmtcdn.com/data/pictures/chains/0/20324910/1f6e43ce5e9bab42ac113d481351ca59_o2_featured_v2.jpg',
        remark: 'Promoted',
        name:'EatFit - Desi Meals, Burgers & ...',
        types:'Healthy Food, North India...',
        rating:'3.9',
        price:100,
        distance:'18 min'
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

function RestaurantList() {
  return (
    <>
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
              <div>{restaurant.name}</div>
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
  );
}

export default RestaurantList;
