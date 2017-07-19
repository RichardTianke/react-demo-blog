import React, {Component} from 'react';
import BlogItem from "./BlogItem";
import {Link} from 'react-router-dom';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        fetch('//local.irichard.cn/api/blogs').then(response => {
            if (response.state >= 400) {
                throw new DOMException('Cannot connect.');
            }
            return response.json();
        }).then(stories => {
            this.setState({
                blogs: stories,
            })
        });
    }

    render() {
        const blogs = this.state.blogs;
        return (
            <div className="content-blog">
                <br />
                <div className="row">
                    <div className="col-lg-12">
                        <Link className="btn btn-success" to="/create">Create</Link>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, index) =>
                        <BlogItem key={index} blog={blog} />
                    )}
                </div>
            </div>
        );
    }
}

export default Blog;