import React from "react";
import { fetchAuthorPosts } from "./RedditApi";
import PostList from "./PostList";
import Loading from "./Loading";

export default class AnimalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: props.animal,
      posts: [],
      loading: true
    };
  }
  async componentDidMount() {
    console.log(this.props.match.params.author);
    let posts = await fetchAuthorPosts(this.props.match.params.author);
    if (posts.data !== undefined) {
      posts = posts.data.children;
    } else {
      posts = [];
    }
    this.setState({ posts, loading: false });
  }
  render() {
    return (
      <div className="main">
        {this.state.loading ? (
          <Loading />
        ) : (
          <PostList posts={this.state.posts} />
        )}
      </div>
    );
  }
}
