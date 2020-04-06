import React,{ Component} from 'react';
import { Link  } from 'react-router-dom';
// import NewColor from './NewColor';
import './App.css';

class AddColor extends Component{
    constructor(){
        super()
        this.state ={
            color:"white"
        }
    }
    onChangeHandler = (event) =>{
        this.setState({color: event.target.value})
    }

    render(){ 
        const styledObj ={
            background: this.state.color,
            minHeight: '100vh'
        }
        return(
            <div>
                <h1 className="App-header"> ADD A COLOR</h1>
                
              
               <div style = {styledObj}>
                    <input 
                     placeholder="SEARCH FOR COLOR"
                    className="input" type="text"
                   onChange = {this.onChangeHandler}
                   value = {this.state.value}
                 />
                   {/* <button onClick ={() =>this.props.history.push('/newcolor')}>View</button>  */}
                 <h1 className="upperCaseText"> background color is {this.state.color} </h1>
                 <h1> ISN'T IT BEAUTIFUL? </h1>
                 <Link to ="/"> GO BACK</Link> 
                </div> 
                
                {/* <button onClick ={() =>this.props.history.push('/newcolor')}>View</button> */}
                  {/* <NewColor
                 color ={this.state.color} 
                 /> */}
                 
                  
               
            </div>
        )
    }
}

export default AddColor;

