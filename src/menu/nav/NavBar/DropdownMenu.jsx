import React, { Component } from 'react'
import { Dropdown, Icon} from 'semantic-ui-react'

class DropdownMenu extends Component {
    render() {
        return (
            <Dropdown item icon='bars' simple>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name='dropdown' />
                  <span className='text'><Icon name='calendar alternate outline' />Events</span>
  
                  <Dropdown.Menu>
                    <Dropdown.Item>New Event</Dropdown.Item>
                    <Dropdown.Item>All Events</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item><Icon name='user circle' />Profile</Dropdown.Item>
                <Dropdown.Item>
                  <Icon name='dropdown' />
                  <span className='text'><Icon name='setting' />Settings</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>Portal</Dropdown.Item>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Users</Dropdown.Item>
                    <Dropdown.Item>Roles</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item><Icon name='log out' />Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default DropdownMenu
