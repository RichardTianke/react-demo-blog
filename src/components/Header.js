import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        const pathname = this.props.location.pathname;
        return (
            <div className="masthead">
                <h3 className="text-muted">React demo blog</h3>
                <nav>
                    <ul className="nav nav-justified">
                        <li className={pathname === '/' ? 'active' : ''}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className={pathname === '/blog' ? 'active' : ''}>
                            <Link to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className={pathname === '/about' ? 'active' : ''}>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className={pathname === '/contact' ? 'active' : ''}>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);