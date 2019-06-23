import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        const {events, selectedEvent, deletedEvent} = this.props;
        return (
            <Fragment>
                {events.map(event => (
                    <EventListItem selectedEvent={selectedEvent} deletedEvent={deletedEvent} key={event.id} event={event} />
                ))}
            </Fragment>
        )
    }
}

export default EventList
