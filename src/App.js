import React,{useEffect} from 'react'; 
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import $ from 'jquery'
import './assets/css/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



function App() {
  useEffect(() => {
    $(document).ready(function() {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        margin: -70,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
    });
  }, []);
  
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route element={<Home />} path='/'/>
    <Route element={<Login />} path='/login' />
    <Route element={<About />} path='/about-us' /> 
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;