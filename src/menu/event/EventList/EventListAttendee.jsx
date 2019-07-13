import React, { Component } from 'react'
import { List, Image, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;
        return (
            <List.Item>
                <Popup
                    size='mini'
                    content={attendee.displayName}
                    trigger={<Image as={Link} to={`/profile/${attendee.id}`} size='mini' alt='' circular src={attendee.photoURL} />}
                />
                
            </List.Item>
        )
    }
}

export default EventListAttendee