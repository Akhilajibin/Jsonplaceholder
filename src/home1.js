import React, { Component } from 'react';
import PostItem from './Postitem.js';
import NewPost from './newpost.js';
import Comments from './comments.js';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            buttonVisible: false,
            newPostVisible: false,
            commentvalue: false,
            comments: []

        };
    }
    // function for find individual post of a user5 

    buttonClick = () => {
        this.setState({ newPostVisible: true });
        this.setState({ buttonVisible: true });
        fetch('https://jsonplaceholder.typicode.com/posts?userId=5')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data: data });

            })

            .catch(error => console.log("error", error));


    }

    // onload function for load api data 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data: data });

            })
            .catch(error => console.log("error", error));

    }

    // function for perform delete of individual post 
    onDelete = (e) => {
        let array = this.state.data;
        console.log(array);
        var deleteid = e.target.id;
        console.log(deleteid);
        var newarray = array.filter((del) => {

            if (del.id == deleteid) {
                return (del.id === deleteid);
            } else {
                return (del.id !== deleteid);
            }


        });
        console.log(newarray);
        this.setState({ data: newarray });

    }


    // function for get comment of a particular post
    commentsinfo = (e) => {
        console.log("hai");
        this.setState((prevValue, props) => {
            return { commentvalue: true }
        });
        fetch('https://jsonplaceholder.typicode.com/comments?postid=' + e.target.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ comments: data });

            })

            .catch(error => console.log("error", error));

        console.log(this.state.comments);
        var check = this.state.comments;
        console.log(check);
        var commentid = e.target.id;
        console.log(commentid);
        console.log("hello");

        var newarray = check.find((comments) => {

            console.log('post id' + comments.postId);
            console.log('comen' + commentid);
            console.log(check);
            if (comments.postId === commentid)


                console.log("insided loop");
        })

        this.setState({ comments: newarray });

    }

    

    render() {

        return (
            <div>
                 <h1>ALL POSTS</h1>
                      <div className='butonstyle'>
                              <button type="submit" onClick={this.buttonClick} >MYPOSTS</button>
                     </div>
                   {/* for add new post */}
                       {(this.state.newPostVisible===true?<NewPost/>:null)} 

                        {this.state.data.map((item)=>{
                              return <PostItem details={item} deleteInfo={this.onDelete}  viewcomments={this.commentsinfo}/>     
                         })}
                       
                        {(this.state.commentvalue===true?<Comments name={this.state.comments}/>:null)}
                        
           </div>
        );
    }
}

export default Home;