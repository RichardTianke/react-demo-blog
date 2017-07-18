import React, {Component} from 'react';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/justified-nav.css';
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;
