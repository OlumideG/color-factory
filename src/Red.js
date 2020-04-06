import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';

const Red = () => (
  <div className="red-body">
     
    <h1> THIS IS RED </h1>
    <h1> ISN'T IT BEAUTIFUL? </h1>
    <Link to ="/"> GO BACK</Link> 
  </div>
);

export default Red;
