import React, { Component, Fragment } from 'react'
import NavBar from '../../menu/nav/NavBar/NavBar'
import EventDashboard from '../../menu/event/EventDashboard/EventDashboard'
import { Container, Segment } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Segment basic>
          <NavBar sidebarToggle={this.handleSidebarToggle} />
          <Container className="main">
            <EventDashboard />
          </Container>
        </Segment>
      </Fragment>
    )
  }
}

export default App;
