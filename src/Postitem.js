import React from 'react';
import Home from './home1.js';
import Comments from './comments.js';
import './home.css'
class PostItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentvalue: false
        };
    }


    render() {

        return (

            <div>


     		 		<div key={this.props.details.id} className='maindiv'>
            
                
				              <p>{this.props.details.title}</p>
				              <p>{this.props.details.body}</p>
				             	     {this.props.details.userId===5? <button onClick={this.props.deleteInfo} id={this.props.details.id} >DELETE</button>:null }
				           <br/>
				           
				   				   {this.props.details.userId===5?<button onClick={this.props.viewcomments} id={this.props.details.id}>VIEW COMMENTS</button>:null}
				           <br/>

				              
				             
          		</div>
        </div>

        );
    }

}


export default PostItem;