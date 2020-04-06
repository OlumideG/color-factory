import React from "react";
import "./App.css";

import { Link } from 'react-router-dom';

const Green = () => (
  <div className="green-body">
     
    <h1> THIS IS GREEN </h1>
    <h1> ISN'T IT BEAUTIFUL? </h1>
    <Link to ="/"> GO BACK</Link> 
  </div>
);

export default Green;
