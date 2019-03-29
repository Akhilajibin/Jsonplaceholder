
import React from 'react';
import Home from './home1.js';
import PostItem from './Postitem.js';
// function is not completed 

const fulldata=(props)=>{
				console.log(props);
				//if(props.length()>0){

				//	console.log("props inside function",props);

				//}

				//else
				//{
					console.log("no value");
				//}

{/*return item.map((comments)=>
{

	return comments.name[0];
}


	)*/}


}
// function  for view individual post comments
const Comments=(props)=>{
	
return(
	<div>

			{console.log('inside comment component', props)}
			<p>{fulldata()} </p>
			
	</div>

	);

}
export default Comments;
