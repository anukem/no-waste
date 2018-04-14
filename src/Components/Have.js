import React, { Component } from 'react';


class Have extends Component {
  render(){
    return(
    <div>
      <h1> Submit Food Entry </h1>
      <label> Group Name</label>
      <p> Enter the name of your Organization: </p>
      <input placeholder="e.g., South Dallas Food Shelter" required/>

      <label> Address </label>
      <p> Enter Your Address: </p>
      <input placeholder="e.g., 1702 S Cesar Chavez Blvd, Dallas, TX 75215" required/>

      <label> Food Items </label>
      <p> Food Items: </p>
      <input placeholder="5 cans of SpaghettiOs" required/>

      <label> Pickup Date </label>
      <p> Date and time of pickup: </p>
      <input placeholder="Pickup Date" required/>


      <button type="submit "value="Submit Entry"> Submit Entry </button>

    </div>
  );
  }
  }
export default Have;
