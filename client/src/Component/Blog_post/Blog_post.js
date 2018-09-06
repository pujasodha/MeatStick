import React, { Component } from "react";
import "./Blog_post.css";
import axios from "axios";

class Blog_post extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get(`/blog_post`).then(res => {
      const blogs = res.data.map(obj => obj);
      this.setState({ blogs });
    });
  }

  render() {
    return (
      <div className="blog_post">
        {this.state.blogs.map(blog => (
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Reviews</span>
                  <p id="card" key={blog._id}>
                    {blog.subject}
                    <br />
                    {blog.blog}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog_post;
