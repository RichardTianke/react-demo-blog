import React, {Component} from 'react';
import Validation from 'react-validation';
import Serialize from 'form-serialize';


class BlogCreate extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value,
        })
    }

    handleSubmit(event){
        const form = document.querySelector('#example-form');
        console.log(form);
        const data = Serialize(form);
        console.log(data);
        event.preventDefault();
    }

    render(){
        return (
            <div className="content-create">
                <br />
                <form id="example-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">Title</label>
                        <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Description</label>
                        <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BlogCreate;