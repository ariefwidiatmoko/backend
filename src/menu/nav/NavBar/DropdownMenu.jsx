import React, { Component } from "react";
import { Dropdown, Icon, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class DropdownMenu extends Component {
  render() {
    const {signOut, auth} = this.props;
    return (
      <Dropdown closeOnChange={true} item icon="bars" simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <div style={{textAlign: 'center'}}>
              <Image src={auth.photoURL || '/assets/user.png'} size='tiny' avatar />
            </div>
            <div style={{textAlign: 'center', paddingTop: 10, paddingBottom: 7}}>{auth.displayName}</div>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">
              <Icon name="calendar alternate outline" />
              Events
            </span>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/events-create">
                New Event
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/events'>Events</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/people">
            <Icon name="users" />
            People
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to='/tests'>
            <Icon name="lab" />
            Test Area
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">
              <Icon name="setting" />
              Settings
            </span>
            <Dropdown.Menu>
              <Dropdown.Item>Portal</Dropdown.Item>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Users</Dropdown.Item>
              <Dropdown.Item>Roles</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item onClick={signOut}>
            <Icon name="sign-out" />
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownMenu;
