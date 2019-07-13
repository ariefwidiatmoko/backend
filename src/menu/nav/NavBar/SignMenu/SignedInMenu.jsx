import React from 'react'
import {Menu, Dropdown, Icon} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const SignedInMenu = ({signOut, profile, auth}) => {
    return (
            <Menu.Item position="right">
              <Icon name='user circle' size='large' />
              <Dropdown pointing="top left" text={profile.displayName}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Create Event" icon="plus" />
                  <Dropdown.Item text="My Events" icon="calendar" />
                  <Dropdown.Item text="My Network" icon="users" />
                  <Dropdown.Item as={NavLink} to={`/profile/${auth.uid}`} text="My Profile" icon="user" />
                  <Dropdown.Item as={NavLink} to='/settings' text="Settings" icon="settings" />
                  <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
    )
}

export default SignedInMenu
