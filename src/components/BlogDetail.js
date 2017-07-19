import React, {Component} from 'react';

class BlogDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {}
        };
    }

    componentDidMount() {
        fetch('//local.irichard.cn/api/blogs/' + this.props.match.params.id).then(response => {
            if (response.state >= 400) {
                throw new DOMException('Cannot connect.')
            }
            return response.json();
        }).then(stories => {
            console.log(stories);
            this.setState({
                blog: stories
            });
        })
    }

    render() {
        const blog = this.state.blog;
        return (
            <div className="col-lg-12">
                <h2>{blog.title}</h2>
                <p>{blog.description} </p>
                <hr />
            </div>
        );
    }
}

export default BlogDetail;