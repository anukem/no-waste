import React, { Component } from 'react';

import './css/App.css';
import corruption1 from  './Components/images/HAVE.jpg';
import corruption2 from  './Components/images/NEED.jpg';
import Ticker from './Components/Ticker.js';



class Intro extends Component {
  render() {
    return (

      <div >
        <Ticker/>

        <div className = "intro-menu">
          <figure className="intro-menu-item">
            < a href="/have">< img className="thumbnail" src={corruption1} alt="404"/></a>


          </figure>
          <figure className="intro-menu-item">
            < a href="/need">< img className="thumbnail" src={corruption2} alt="404"/></a>

          </figure>

        </div>



      </div>
    );
  }
}

export default Intro;
