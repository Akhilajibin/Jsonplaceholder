

import React from 'react';
import Home from './home1.js';
import './home.css';

const renderButton=(id,props)=> {
	console.log(props);
	console.log(id);
	
    if(id === 5) {
      return (
      	<div>
          <button onClick={props.deleteInfo} id={props.details.id} >DELETE</button>
          </div>
      );
    } 
}

const PostItem = (props) => {


	return(

		<div>
			{console.log(props)}

			<div key={props.details.id} className='maindiv'>
            
                
	            <p>{props.details.title}</p>
	            <p>{props.details.body}</p>
	          
	         
	          <p> {renderButton(props.details.userId,props)}</p>

	            
	           
        	</div>
        </div>

	);
	
}
export default PostItem;
