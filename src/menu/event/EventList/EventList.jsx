import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        const {events, deletedEvent} = this.props;
        return (
            <Fragment>
                {events && events.map(event => (
                    <EventListItem deletedEvent={deletedEvent} key={event.id} event={event} />
                ))}
            </Fragment>
        )
    }
}

export default EventList
