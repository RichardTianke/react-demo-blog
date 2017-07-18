import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="masthead">
                <h3 className="text-muted">React demo blog</h3>
                <nav>
                    <ul className="nav nav-justified">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;