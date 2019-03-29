import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home1.js';

class NewPost extends React.Component {

//function for create a new  post
    postAdd = (props) => {
        props.visibility = true;

        var title = this.refs.title.value;
        var body = this.refs.body.value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    userId: 1,
                    title: title,
                    body: body

                })

            })
            .then(response => response.json())
            .then(json => {
                    console.log(json);
                    alert("successfully created");
                }


            )

            .catch(error => console.log("error", error));


    }


    render() {
        return (

            <div className='butonstyle'>
              <h3>ADD NEW POST</h3>
              <input type="text" ref="title" name="txttitle"placeholder="enter title"/><br/>
              <input type="text" ref="body"name="txtbody" placeholder="enter details"/><br/>
              <button type="submit" onClick={this.postAdd} >Add Post</button>
          </div>

        );

    }
}
export default NewPost;