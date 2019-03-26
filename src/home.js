import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
     
    };
  }


clickMypost=()=>
{

fetch('https://jsonplaceholder.typicode.com/posts?userId=5')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        let info=data.map((item)=>{
     
          return (
    		
              <div key={item.id} className='maindiv'>
            {/*  <p>Id : {item.id}</p>
                <p>UserId : {item.userId}</p> */}
                <p>Title : {item.title}</p>
                <p>Body : {item.body}</p>

              </div>

            )
        
        
       })
        
        this.setState({data:info});

      })

       .catch(error=>console.log("error",error));
}





  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        let info=data.map((item)=>{
       
          return (
    		
              <div key={item.id} className='maindiv'>
            {/*  <p>Id : {item.id}</p>
                <p>UserId : {item.userId}</p>*/}
                <p>Title : {item.title}</p>
                <p>Body : {item.body}</p>

              </div>

            )
        
        
       })
        
        this.setState({data:info});

      })

       .catch(error=>console.log("error",error));

  }

  render() {
    
    return (
      <div>
      <h1>All posts</h1>
      <button type="submit" onClick={this.clickMypost}>My Post</button>
      {this.state.data}
      
      </div>
    );
  }
}

export default Home;

