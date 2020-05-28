//import {useBooleanKnob} from "@stardust-ui/docs-components";
import React, {Component} from 'react';
import {Header, Menu, Segment, Sidebar, Icon} from "semantic-ui-react";



class SidebarMenu extends React.Component {
    render() {
    //const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu}
                         animation='overlay'
                         icon='labeled'
                         inverted
                         //visible={false}
                         //onHide={() => setVisible(false)}
                         vertical
                         width='thin'
                >
                    <Menu.Item as={'item'}>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                </Sidebar>
            </Sidebar.Pushable>
        );
    }
}

export default SidebarMenu;
