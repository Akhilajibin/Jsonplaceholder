import React from 'react';
import Home from './home1.js';
import Comments from './comments.js';
import './home.css';
class PostItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    commentsinfo = (e) => {
			        console.log("hello");
			        fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
			            .then(response => response.json())
			            .then(data => {
			                console.log(data);
			              
			               console.log(this.setState({ comments: data }));

			            })
			            .catch(error => console.log("error", error));


			       			 let array = this.state.comments;
			       			console.log(array);
			       	 		var commentid = e.target.id;
			     				console.log(commentid);
			        		var newarray = array.find((comments) => {

			            { /*  checking post id with all posts ids  */ }

			            if (comments.id === commentid) {

			                { /*return <Comments name={newarray.name} body={newarray.body}/>*/ }
			                return (<Comments/>);

			            } else {
			                return (comments.id !== commentid);
			            }
			        })

			        this.setState({ comments: newarray });

   }
    render() {

        return (

            <div>


     				 <div key={this.props.details.id} className='maindiv'>
            
                
            				  <p>{this.props.details.title}</p>
             				 <p>{this.props.details.body}</p>
             				 {this.props.details.userId===5? <button onClick={this.props.deleteInfo} id={this.props.details.id} >DELETE</button>:null }
          					 <br/>
           
     						 {this.props.details.userId===5?<button onClick={this.commentsinfo} id={this.props.details.id}>VIEW COMMENTS</button>:null}
        					   <br/>
         	    
         			 </div>
       	 </div>

        );
    }

}


export default PostItem;