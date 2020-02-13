import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './landingpage.css';
import search from '../search.svg'
import { Link } from 'react-router-dom'



export default function LandingPage() {
  return (
    <div className="landing">
      <div>
        <Header />
      </div>

      <div className="center-content">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google"
          className="google-logo"
        />
      </div> 
      <img src={search} alt="search" className="search-icon" width="30" color="#9AA0A6" />
      <img src="http://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" height="30" alt="googlemic" className="googlemic"/>
      
      <div className="input-wrap">
        <input type="text" className="input-box" />
       
      </div>
      
      <div className="buttons">
      <Link to ="/result">
      
        <input type="button" value="Google Search" className="search" />
        </Link>
        <input type="button" value="I'm Feeling Lucky" className="feeling" />

      </div>
      <div id="offer">Google offered in: 
      <a  className="offer-link space" href="https://www.google.com/setprefs?sig=0_JI7Ddv2ZHYn8jJqRXIlLc6r0vA8%3D&amp;hl=ha&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjCqrKU3cznAhUVHMAKHfcmAo0Q2ZgBCA4">Hausa</a>    
      <a className="offer-link" href="https://www.google.com/setprefs?sig=0_JI7Ddv2ZHYn8jJqRXIlLc6r0vA8%3D&amp;hl=ig&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjCqrKU3cznAhUVHMAKHfcmAo0Q2ZgBCA8">Igbo</a>    
      <a className="offer-link" href="https://www.google.com/setprefs?sig=0_JI7Ddv2ZHYn8jJqRXIlLc6r0vA8%3D&amp;hl=yo&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjCqrKU3cznAhUVHMAKHfcmAo0Q2ZgBCBA">Èdè Yorùbá</a>    
      <a className="offer-link" href="https://www.google.com/setprefs?sig=0_JI7Ddv2ZHYn8jJqRXIlLc6r0vA8%3D&amp;hl=pcm&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjCqrKU3cznAhUVHMAKHfcmAo0Q2ZgBCBE">Nigerian Pidgin</a>  </div>
      <Footer />
      
    </div>
  );
}
