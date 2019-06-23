import React, { Component } from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { events } from './MockupDate'
import cuid from 'cuid'


class EventDashboard extends Component {
    state = {
        events: events,
        isOpen: false,
        selectedEvent: null
    }

    handleFormOpen = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen, selectedEvent: null }));
    handleFormCancel = () => this.setState({isOpen: false})

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.setState(({events}) => ({
            events: [...events, newEvent]
        }))
        this.setState({isOpen: false})
    }

    handleSelectedEvent = (e, event) => {
        console.log(e, event);
        this.setState({ selectedEvent: event, isOpen: true })
    }

    handleUpdatedEvent = (updatedEvent) => {
        this.setState(({events}) => ({
            events: events.map(event => {
                if (event.id === updatedEvent.id) {
                    return {...updatedEvent}
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEvent: null
        }))
    }

    handleDeletedEvent = (id) => {
        this.setState(({events}) => ({
            events: events.filter(e => e.id !== id)
        }));
    };

    render() {
        const {events, isOpen, selectedEvent} = this.state;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList selectedEvent={this.handleSelectedEvent} deletedEvent={this.handleDeletedEvent} events={events} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Segment><Button fluid color='teal' onClick={this.handleFormOpen} content={isOpen === true ? "Close Form" : "Create Event"} /></Segment>
                    {isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} updatedEvent={this.handleUpdatedEvent} selectedEvent={selectedEvent} formCancel={this.handleFormCancel} createEvent={this.handleCreateEvent} cancelForm={ this.handleFormOpen } />}
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard
