import React from "react";
import { Grid, Segment, Header, Card, Image, Tab } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import format from 'date-fns/format'

const panes = [
  {menuItem: 'All Events', pane: {key: 'allEvents'}},
  {menuItem: 'Past Events', pane: {key: 'pastEvents'}},
  {menuItem: 'Future Events', pane: {key: 'futureEvents'}},
  {menuItem: 'Hosting', pane: {key: 'hosted'}},
]

const UserEvents = ({ events, eventsLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached loading={eventsLoading}>
        <Header icon="calendar" content="Events" />
        <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary: true, pointing: true}}/>
        <br/>
        <Card.Group itemsPerRow={5}>
          {events &&
            events.map(event => (
              <Card as={Link} to={`/event/${event.id}`} key={event.id}>
                <Image src={`/assets/categoryImages/${event.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign="center" ><span style={{fontSize: 13}}>{event.title}</span></Card.Header>
                  <Card.Meta textAlign="center">
                    <div><span style={{fontSize: 12}}>{event.date && format(event.date.toDate(), 'EEEE do LLLL')}</span></div>
                    <div><span style={{fontSize: 12}}>{event.date && format(event.date.toDate(), 'h:mm a')}</span></div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
            {!events[0] && <div style={{margin: 15, paddingBottom: 105}}><span>No Event</span></div>}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserEvents;
