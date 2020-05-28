import React, {Component} from 'react';


// components
import SidebarMenu from "./SidebarMenu";

// style
import './header.scss';


class Header extends React.Component {
    render() {
    return (
        <header className="Header">
            <navbar className="w-100 nav">
                <SidebarMenu className="sidebar" title="Medievalix" />
                <h1>Medievalix</h1>
            </navbar>
        </header>
    );
    }
}

export default Header;