import React from 'react'
import {Menu, Button, Icon} from 'semantic-ui-react';

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position="right">
          <Button onClick={signIn} basic inverted animated='vertical'>
              <Button.Content hidden>Login</Button.Content>
              <Button.Content visible>
                  <Icon name='sign in' />
              </Button.Content>
          </Button>
          <Button basic inverted animated='vertical' style={{ marginLeft: "0.5em" }}>
              <Button.Content hidden>Register</Button.Content>
              <Button.Content visible>
                  <Icon name='address book outline' />
              </Button.Content>
          </Button>
        </Menu.Item>
    )
}

export default SignedOutMenu
