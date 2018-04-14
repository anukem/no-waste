import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Intro from './Intro';
import Have from './Components/Have.js';
import Want from './Components/Want.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

  <BrowserRouter>
  <div>

    <Route exact path ="/" component= {Intro} />
    <Route exact path ="/home" component ={Intro}/>
    <Route exact path ="/have" component ={Have}/>
    <Route exact path ="/need" component ={Want}/>



  </div>

  </BrowserRouter> ,document.getElementById('root')


);
