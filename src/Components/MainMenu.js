import React, { Component } from 'react';
import {Link} from 'react-router-dom';





class MainMenu extends Component {
  render() {
    return (

      <div className="MainMenu">
        <ul>
          <div Class Name="MMenuButton">
            <Link to = '/look'>LOOK   </Link>
          </div>
          <div Class Name="MMenuButton">
            <a href ='/obtain'>OBTAIN </a>
          </div>
          <div Class Name="MMenuButton">
            <a href='/contact'>CONTACT</a>
          </div>
        </ul>
      </div>

    );
  }
}

export default MainMenu;
