import React from 'react';
import './App.css';
import Blue from './Blue';
import Red from './Red';
import Green from './Green';
import AddColor from './AddColor';
import NewColor from './NewColor';
import { Link , Switch, Route } from 'react-router-dom';

const Homepage =()=>(
  <div>
    <div className="App-header">
    <h1>Welcome to the color factory </h1>
      <h2>
       <Link to="/addcolor">Add a color </Link>
      </h2>
    <h3> Please select a color </h3>
  </div>
 
  <ul>
    <li>
      <Link to="/red">Red </Link>
    </li>
    <li>
      <Link to="/green">Green </Link>
    </li>
    <li>
      <Link to="/blue">Blue </Link>
    </li>
  </ul>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component ={Homepage} />
          <Route path="/blue" component = {Blue} />
          <Route path="/red" component = {Red} />
          <Route path="/green" component = {Green} />
          <Route path="/addcolor" component = {AddColor} />
          <Route path="/newcolor" component = {NewColor} />
         </Switch>
    </div>
  );
}

export default App;
