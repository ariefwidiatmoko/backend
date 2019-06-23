import React, { Component } from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import DropdownMenu from './DropdownMenu'
import { Link, withRouter } from "react-router-dom";
import SignedOutMenu from "./SignMenu/SignedOutMenu";
import SignedInMenu from "./SignMenu/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  }

  handleSignIn = () => this.setState({ authenticated: true });
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  }

  render() {
    const {authenticated} = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          {authenticated ? <DropdownMenu/> : null}
          <Menu.Item as={Link} to='/' header>
            <Icon name="universal access" size='large' />Dashboard
          </Menu.Item>
          { authenticated ? <SignedInMenu signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} />}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
