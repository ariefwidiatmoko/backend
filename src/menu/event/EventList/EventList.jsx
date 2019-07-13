import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'
import LoadingComponent from '../../../app/layout/LoadingComponent';

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <Fragment>
                {events ? events.map(event => (
                    <EventListItem key={event.id} event={event} />
                )) : <LoadingComponent inline='centered' />}
            </Fragment>
        )
    }
}

export default EventList
