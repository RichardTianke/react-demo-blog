import React, {Component} from 'react';
import Footer from "./Footer";
import Home from "./Home";
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import BlogDetail from './BlogDetail';
import BlogCreate from './BlogCreate';

import {Route} from 'react-router-dom';


class Content extends Component {
    render() {
        return (
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/detail/:id" component={BlogDetail}/>
                <Route path="/create" component={BlogCreate}/>
                <Footer/>
            </div>
        );
    }
}

export default Content;