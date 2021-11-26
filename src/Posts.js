import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }; // {} shows it's a json object
  }
  componentDidMount() {
    fetch("https://makers-acebook-project.herokuapp.com/posts.json")
      .then((response) => response.json())
      .then((jsonBody) => this.setState({ posts: jsonBody }));
  }
  render() {
    // return (<div>{this.state.posts.forEach((element) => element.message)}</div>
    const listPosts = this.state.posts.map((post) => (
      <div key={post.id}>
        <li>
          {post.message} likes: {post.likes_count}
          {post.video_url ? (
            <span>video: {post.video_url}</span>
          ) : (
            <span></span>
          )}
        </li>
      </div>
    ));
    return (
      <div>
        <ul>{listPosts}</ul>
      </div>
    );
  }
}

// function fetchPostsFromRails(callbackFunction) {
//   fetch(`https://makers-acebook-project.herokuapp.com/posts.json`)
//     .then((response) => response.json())
//     .then(callbackFunction); //function to handle the data, if not
//     //it will do nothing and break.
// }

export default Posts;
