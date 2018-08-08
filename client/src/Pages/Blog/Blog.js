import React, { Component } from "react";
import "./Blog.css";
import Blog_put from "../../Component/Blog_put"
import Blog_post from "../../Component/Blog_post"


class Blog extends Component {
    render() {
        return (
            <div className="blog">
            <Blog_post />
            <Blog_put />
            </div>
        );
    }
}

export default Blog;