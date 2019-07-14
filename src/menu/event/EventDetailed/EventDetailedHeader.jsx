import React, { Component, Fragment } from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const eventImageStyle = {
  filter: "brightness(75%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

class EventDetailedHeader extends Component {
  render() {
    const {
      event,
      isHost,
      isGoing,
      goingToEvent,
      cancelGoingToEvent
    } = this.props;
    return (
      <Fragment>
        {event.id && (
          <Segment.Group>
            <Segment basic attached="top" style={{ padding: "0" }}>
              <Image
                src={`/assets/categoryImages/${event.category}.jpg`}
                fluid
                style={eventImageStyle}
              />

              <Segment basic style={eventImageTextStyle}>
                <Item.Group>
                  <Item>
                    <Item.Content>
                      <Header
                        size="huge"
                        content={event.title}
                        style={{ color: "white" }}
                      />
                      <p>
                        {event.date &&
                          format(event.date.toDate(), "EEEE do LLLL")}
                      </p>
                      <p>
                        Hosted by{" "}
                        <strong>
                          <Link
                            to={`/profile/${event.hostUid}`}
                            style={{ color: "white" }}
                          >
                            {event.hostedBy}
                          </Link>
                        </strong>
                      </p>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
            </Segment>
            <Segment attached="bottom" clearing>
              {isHost && (
                <Button
                  as={Link}
                  to={`/events-manage/${event.id}`}
                  color="orange"
                  floated="right"
                >
                  Manage Event
                </Button>
              )}
              {!isHost && (
                <Fragment>
                  {isGoing ? (
                    <Button onClick={() => cancelGoingToEvent(event)}>
                      Cancel My Place
                    </Button>
                  ) : (
                    <Button onClick={() => goingToEvent(event)} color="teal">
                      JOIN THIS EVENT
                    </Button>
                  )}
                </Fragment>
              )}
            </Segment>
          </Segment.Group>
        )}
      </Fragment>
    );
  }
}

export default EventDetailedHeader;
