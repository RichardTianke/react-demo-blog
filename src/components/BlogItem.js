import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class BlogItem extends Component{

    render(){
        return (
            <div className="col-lg-12">
                <h2>{this.props.blog.title}</h2>
                <p>{this.props.blog.description}</p>
                <p>
                    <Link className="btn btn-primary" role="button" to={'/detail/' + this.props.blog.id}>
                        View details &raquo;
                    </Link>
                </p>
            </div>
        );
    }
}

export default BlogItem;