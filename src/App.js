import React, {Component} from 'react';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/justified-nav.css';
import Content from "./components/Content";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <Content/>
                </div>
            </Router>
        );
    }
}

export default App;
