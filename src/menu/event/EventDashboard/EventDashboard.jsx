import React, { Component } from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { events } from './MockupDate'
import cuid from 'cuid'


class EventDashboard extends Component {
    state = {
        events: events,
        isOpen: false
    }

    handleFormOpen = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.setState(({events}) => ({
            events: [...events, newEvent]
        }))
        this.setState({isOpen: false})
    }

    render() {
        const {events, isOpen} = this.state;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Segment><Button fluid color='teal' onClick={this.handleFormOpen} content={isOpen === true ? "Close Form" : "Create Event"} /></Segment>
                    {isOpen && <EventForm createEvent={this.handleCreateEvent} cancelForm={ this.handleFormOpen } />}
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard
