import React from 'react'
import {Segment, Container, Header, Button, Icon} from 'semantic-ui-react'

const HomePage = ({history}) => {
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
              <Button onClick={() => history.push('/events')} size='huge' inverted>
                Get started
                <Icon name='right arrow' inverted />
              </Button>
            </Container>
          </Segment>
    )
}

export default HomePage