import React, { Component } from 'react';                                     
import PostItem from './Postitem.js';
import NewPost from './newpost.js';
import Comments from './comments.js';
import './home.css';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            buttonVisible:false,
            newPostVisible:false,
          

        };
    }

    buttonClick = () => {
       this.setState({ newPostVisible:true});
      this.setState({buttonVisible:true});
        fetch('https://jsonplaceholder.typicode.com/posts?userId=5')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                 this.setState({ data:data});
               
            })

            .catch(error => console.log("error", error));


    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data:data});

            })
            .catch(error => console.log("error", error));

    }

onDelete=(e)=>{
  let array=this.state.data;
  console.log(array);
  var deleteid=e.target.id;
  console.log(deleteid);
  var newarray=array.filter((del)=>
{

  if(del.id==deleteid)
  {
    return(del.id===deleteid);
  }
  else
  {
    return(del.id!==deleteid);
  }
  
});
  console.log(newarray);
  this.setState({data: newarray});
  
}




    render() {

        return (
            <div>
                 <h1>ALL POSTS</h1>
                
                        {this.state.data.map((item)=>{
                              return <PostItem details={item} deleteInfo={this.onDelete} />     
                         })}

                           <button type="submit" onClick={this.buttonClick} >MYPOSTS</button>
                           

                        {(this.state.newPostVisible===true?<NewPost/>:null)} 
                           
                            
           </div>
        );
    }
}

export default Home;
