import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'
import LoadingComponent from '../../../app/layout/LoadingComponent';

class EventList extends Component {
    render() {
        const {events, deletedEvent} = this.props;
        return (
            <Fragment>
                {events ? events.map(event => (
                    <EventListItem deletedEvent={deletedEvent} key={event.id} event={event} />
                )) : <LoadingComponent inline='centered' />}
            </Fragment>
        )
    }
}

export default EventList
