import React from 'react';
import Sidebar from "react-sidebar";

import './header.scss';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar sidebarClassName="w-25"
                sidebar={<b>Menu</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={
                    {sidebar: {background: "white"}}
                }
            >
                <button className="bars" onClick={()=> this.onSetSidebarOpen(true)}>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </button>

            </Sidebar>

        );
    }
}

export default SidebarMenu;
