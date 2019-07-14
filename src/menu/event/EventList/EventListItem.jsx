import React, { Component } from "react";
import { Segment, Item, Icon, Button, List, Label } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { objectToArray } from "../../../app/common/util/helpers";
import LazyLoad from "react-lazyload";

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <Segment.Group key={event.id}>
        <Segment>
          <Item.Group>
            <Item>
              <LazyLoad height={90} placeholder={<Item.Image size="tiny" circular src="/assets/user.png" />} >
                <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              </LazyLoad>
              <Item.Content>
                <Item.Header as={Link} to={`/events/${event.id}`}>
                  {event.title}
                </Item.Header>
                <Item.Description>
                  Hosted by{" "}
                  <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
                </Item.Description>
                {event.cancelled && (
                  <Label
                    style={{ top: "-40px" }}
                    ribbon="right"
                    color="red"
                    content="Event is cancelled"
                  />
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {format(event.date.toDate(), "EEEE do LLL")} at{" "}
            {format(event.date.toDate(), "h:mm a")} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              objectToArray(event.attendees).map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            style={{marginTop: 14}}
            as={Link}
            to={`/events/${event.id}`}
            color="teal"
            floated="right"
            content="View"
            size='tiny'
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
