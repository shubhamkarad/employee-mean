import React, { Component } from 'react';
import{Link} from "react-router-dom";
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="nav navbar-expand-md navbar-light bg-light">
                    <Link to="/"><a href="/" className="navbar-brand">Employee Management System</a></Link>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                             <Link to="/add-employee"><a href="/" className="nav-link">Home<span className="sr-only">(current)</span></a></Link>
                             </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;