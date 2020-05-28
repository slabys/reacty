import React, {Component} from 'react';


// components
import SidebarMenu from "./SidebarMenu";

// style
import './header.scss';


class Header extends React.Component {
    render() {
    return (
        <header className="Header">
            <nav className="w-100 nav">

                <button className="bars">
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </button>

                <SidebarMenu />

            </nav>
        </header>
    );
    }
}

export default Header;