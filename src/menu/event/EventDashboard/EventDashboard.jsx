import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'
import EventList from '../EventList/EventList'
import {createEvent, updateEvent, deleteEvent} from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';


class EventDashboard extends Component {

    handleDeletedEvent = id => {
        this.props.deleteEvent(id);
    };

    render() {
        const {events, loading} = this.props;
        if (loading) return <LoadingComponent />
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList deletedEvent={this.handleDeletedEvent} events={events} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Activity Feed</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events,
    loading: state.async.loading
})

const mapDispatchToProps = {
    createEvent, updateEvent, deleteEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard)
