import React, { Component } from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import DropdownMenu from './DropdownMenu'

class NavBar extends Component {
  render() {
    const {sidebarToggle} = this.props
    return (
      <Menu inverted fixed="top">
        <Container>
          <DropdownMenu/>
          <Menu.Item header>
            <Icon onClick={sidebarToggle} name="universal access" size='large' />Dashboard
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted animated='vertical'>
                <Button.Content hidden>Login</Button.Content>
                <Button.Content visible>
                    <Icon name='sign in' />
                </Button.Content>
            </Button>
            <Button basic inverted animated='vertical' style={{ marginLeft: "0.5em" }}>
                <Button.Content hidden>Logout</Button.Content>
                <Button.Content visible>
                    <Icon name='log out' />
                </Button.Content>
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
