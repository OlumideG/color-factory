import React from "react";
import "./App.css";

import { Link } from 'react-router-dom';

const Blue = () => (
  <div className="blue-body">
     
    <h1> THIS IS BLUE </h1>
    <h1> ISN'T IT BEAUTIFUL? </h1>
    <Link to ="/"> GO BACK</Link> 
  </div>
);

export default Blue;
