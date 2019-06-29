import React, { Component } from "react";
import {connect} from 'react-redux'
import { Menu, Container, Icon } from "semantic-ui-react";
import DropdownMenu from './DropdownMenu'
import { Link, withRouter } from "react-router-dom";
import SignedOutMenu from "./SignMenu/SignedOutMenu";
import SignedInMenu from "./SignMenu/SignedInMenu";
import { openModal } from '../../modals/modalActions'
import {logout} from '../../auth/authActions'

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  };

  handleSignOut = () => {
    this.props.logout()
    this.props.history.push('/');
  }

  render() {
    const {auth} = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          {authenticated ? <DropdownMenu/> : null}
          <Menu.Item as={Link} to='/events' header>
            <Icon name="universal access" size='large' />Dashboard
          </Menu.Item>
          { authenticated ? <SignedInMenu signOut={this.handleSignOut} currentUser={auth.currentUser} /> : <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />}
        </Container>
      </Menu>
    );
  }
}

const mapDispatctToProps = {
  openModal, logout
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, mapDispatctToProps)(NavBar));
