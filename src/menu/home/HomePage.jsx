import React, {Component} from 'react'
import {connect} from 'react-redux'
import { openModal } from '../modals/modalActions'
import {Segment, Container, Header, Button, Icon} from 'semantic-ui-react'

class HomePage extends Component {

    handleSignIn = () => {
      this.props.openModal('LoginModal')
    };

    handleRegister = () => {
      this.props.openModal('RegisterModal')
    };
    render() {
      const {history} = this.props
      return (
              <Segment inverted textAlign='center' vertical className='masthead'>
              <Container text>
                <Header as='h1' inverted>
                  <Icon
                    size='massive'
                    name='universal access'
                    style={{ marginBottom: 12 }}
                  />
                  Welcome Page
                </Header>
                
                <Button onClick={this.handleSignIn} basic inverted animated='vertical'>
                    <Button.Content hidden>Sign In</Button.Content>
                    <Button.Content visible>
                        <Icon name='sign-in' />
                    </Button.Content>
                </Button>
                <Button onClick={this.handleRegister} basic inverted animated='vertical' style={{ marginLeft: "0.5em" }}>
                    <Button.Content hidden>Register</Button.Content>
                    <Button.Content visible>
                        <Icon name='address book outline' />
                    </Button.Content>
                </Button>
                <Button onClick={() => history.push('/events')} basic inverted animated='vertical' style={{ marginLeft: "0.5em" }}>
                    <Button.Content hidden>Start</Button.Content>
                    <Button.Content visible>
                        <Icon name='right arrow' inverted />
                    </Button.Content>
                </Button>
              </Container>
            </Segment>
      )
    }
}

const mapDispatctToProps = {
  openModal
}

export default connect(null, mapDispatctToProps)(HomePage)
