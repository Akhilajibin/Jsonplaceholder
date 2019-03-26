import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
constructor(props){
	super(props);
	this.state={
	userId:'',
	id:'',
	title:'',
	body:'',
	}
	}	
ComponentDidMount()
{
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(res=>res.json())
		.then(response=>{
		console.log(response);
		alert(response.userId);
		})
		.catch(error=>console.log("error".error));
		{/*alert(this.state.username);*/}
	
}

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Home;
