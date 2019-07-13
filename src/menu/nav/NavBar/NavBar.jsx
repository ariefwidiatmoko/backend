import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import { Menu, Container, Icon } from "semantic-ui-react";
import DropdownMenu from "./DropdownMenu";
import { Link, withRouter } from "react-router-dom";
import SignedOutMenu from "./SignMenu/SignedOutMenu";
import SignedInMenu from "./SignMenu/SignedInMenu";
import { openModal } from "../../modals/modalActions";

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleBackHome = () => {
    this.props.history.push('/')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          {authenticated ? <DropdownMenu signOut={this.handleSignOut} profile={profile} /> : null}
          <Menu.Item as={Link} to="/events" header>
            <Icon name="universal access" size="large" />
            Dashboard
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu
              auth={auth}
              profile={profile}
              signOut={this.handleSignOut}
              currentUser={auth.currentUser}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
              home={this.handleBackHome}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapDispatctToProps = {
  openModal
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth
});

export default withRouter(
  withFirebase(
    connect(
      mapStateToProps,
      mapDispatctToProps
    )(NavBar)
  )
);
