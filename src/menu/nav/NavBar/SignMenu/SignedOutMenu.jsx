import React from 'react'
import {Menu, Button, Icon} from 'semantic-ui-react';

const navButtonSize = {fontSize: 12}

const SignedOutMenu = ({signIn, register, home}) => {
    return (
        <Menu.Item position="right">
          <Button onClick={signIn} basic inverted animated='vertical'>
              <Button.Content hidden style={navButtonSize}>Sign In</Button.Content>
              <Button.Content visible>
                  <Icon name='sign-in' />
              </Button.Content>
          </Button>
          <Button onClick={register} basic inverted animated='vertical' style={{ marginLeft: "0.5em" }}>
              <Button.Content hidden style={navButtonSize}>Sign Up</Button.Content>
              <Button.Content visible>
                  <Icon name='address book outline' />
              </Button.Content>
          </Button>
          <Button onClick={home} basic inverted animated='vertical' style={{ marginLeft: "0.5em" }}>
              <Button.Content hidden style={navButtonSize}>Back</Button.Content>
              <Button.Content visible>
                  <Icon name='home' />
              </Button.Content>
          </Button>
        </Menu.Item>
    )
}

export default SignedOutMenu
