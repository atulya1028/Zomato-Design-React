import React, { useState } from 'react';
import kanha from '../assets/img/brand/kanha.jpeg';
import rominous from '../assets/img/brand/rominous.avif';
import mcdonald from '../assets/img/brand/mcdonalds.png';
import harishankar from '../assets/img/brand/harishankar.jpeg';
import burgerking from '../assets/img/brand/burger_king.png';
import burgerfarm from '../assets/img/brand/burger_farm.jpeg';
import dominos from '../assets/img/brand/dominos.png';
import sodhani from '../assets/img/brand/sodhani.png';
import rollexpress from '../assets/img/brand/roll_express.jpeg';
import subway from '../assets/img/brand/subway.png';
import Restaurant from '../component/restaurant';
import Header from '../component/header';
import Tabs from '../component/tab';
import { Link } from 'react-router-dom';


const Home = () => {

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
      <div style={{ height: '30px' }}></div>
      <h3 style={{ paddingLeft: '80px' }}>Inspiration for your first order</h3>
      <div className="container-fluid" style={{ backgroundColor: 'rgb(248, 248, 248);padding: 10px' }}>
        <div className="owl-carousel owl-theme">
          {/* Pizza */}
          <Link to='/pizza' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
                <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="pizza"
                  style={{ borderRadius: '50%', width: '150px' }} />
                <div>Pizza</div>
              </div>
            </div>
          </Link>
          {/* Burger */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="burger"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Burger</div>
            </div>
          </div>
          {/* Biryani */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="biryani"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Biryani</div>
            </div>
          </div>
          {/* Rolls */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="rolls"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Rolls</div>
            </div>
          </div>
          {/* Cake */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="cake"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Cake</div>
            </div>
          </div>
          {/* Chicken */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
                alt="chicken" style={{ borderRadius: '50%', width: '150px' }} />
              <div>Chicken</div>
            </div>
          </div>
          {/* Thali */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
                alt="thali" style={{ borderRadius: '50%', width: '150px' }} />
              <div>Thali</div>
            </div>
          </div>
          {/* North Indian */}
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
                alt="north indian" style={{ borderRadius: '50%', width: '150px' }} />
              <div>North Indian</div>
            </div>
          </div>
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
                alt="momos" style={{ borderRadius: '50%', width: '150px' }} />
              <div>Momos</div>
            </div>
          </div>
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png" alt="paneer"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Paneer</div>
            </div>
          </div>
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" alt="dosa"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Dosa</div>
            </div>
          </div>
          <div className="item">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
              <img src="https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png" alt="noodles"
                style={{ borderRadius: '50%', width: '150px' }} />
              <div>Noodles</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '50px' }}></div>
      <h3 style={{ paddingLeft: '80px' }}>Top brands for you</h3>
      <div className="owl-carousel owl-theme">
        {/* Brands */}
        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={kanha} alt="pizza"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Kanha</div>
            <div>24 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={rominous} alt="pizza"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Rominus Pizza And Burger</div>
            <div>31 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <img src={mcdonald} alt="pizza"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>McDonald's</div>
            <div>17 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={harishankar} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Harishankar Veg Restro</div>
            <div>29 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={burgerking} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Burger King</div>
            <div>22 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={burgerfarm} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Burger Farm</div>
            <div>23 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={dominos} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Domino's Pizza</div>
            <div>25 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={sodhani} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Sodhani</div>
            <div>25 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={rollexpress} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Roll Express</div>
            <div>27 min</div>
          </div>
        </div>

        <div className="item" style={{ width: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={subway} alt="rolls"
              style={{ borderRadius: '50%', width: '150px', border: '1px solid gainsboro' }} />
            <div style={{ textAlign: 'center' }}>Subway</div>
            <div>27 min</div>
          </div>
        </div>

      </div>

      <div style={{ height: '50px' }}></div>
      {/* Restaurants in Locations */}
      <h2 style={{ paddingLeft: '50px' }}>Malviya Nagar Restaurants, Jaipur</h2>
      <Restaurant />
    </>
  );
}

export default Home;