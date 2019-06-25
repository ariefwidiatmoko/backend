import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react'
import NavBar from '../../menu/nav/NavBar/NavBar'
import EventDashboard from '../../menu/event/EventDashboard/EventDashboard'
import HomePage from '../../menu/home/HomePage';
import EventDetailedPage from '../../menu/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../menu/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../menu/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../menu/user/Settings/SettingsDashboard';
import EventForm from '../../menu/event/EventForm/EventForm';
import TestComponent from '../../menu/testarea/TestComponent';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <Fragment>
            <Segment basic>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path={['/events-create', '/events-manage/:id']} component={EventForm} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/tests' component={TestComponent} />
                </Switch>
              </Container>
            </Segment>
          </Fragment>
        )} />
      </Fragment>
    )
  }
}

export default withRouter(App);
