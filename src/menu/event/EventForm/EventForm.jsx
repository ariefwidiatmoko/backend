import React, { Component } from "react";
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import { Segment, Form, Button, Header } from "semantic-ui-react";
import {createEvent, updateEvent} from '../eventActions'
import cuid from "cuid"
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const validate = combineValidators({
  title: isRequired({message: 'Event Title is required'}),
  category: isRequired({message: 'Category is required'}),
  description: composeValidators(
    isRequired({message: 'Description is required'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('City'),
  venue: isRequired('Venue'),
  date: isRequired('Date')
})

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {

  onFormSubmit = values => {
    if(this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`)
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Arief'
      }
      this.props.createEvent(newEvent);
      this.props.history.push(`events/${newEvent.id}`)
    }
  }

  render() {
    const {history, initialValues, invalid, submitting, pristine} = this.props;
    return (
      <Segment>
        <Header sub color='teal' content='Event Details' />
        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field name='title' component={TextInput} placeholder='Event Title' />
          <Field name='category' component={SelectInput} options={category} placeholder='Event Category' />
          <Field name='description' component={TextArea} placeholder='Event Description' rows={3} />
          <Header sub color='teal' content='Event Location Details' />
          <Field name='city' component={TextInput} placeholder='Event City' />
          <Field name='venue' component={TextInput} placeholder='Event Venue' />
          <Field name='date' component={DateInput} placeholder='Event Date' dateFormat='dd LLL yyyy h:mm a' showTimeSelect timeFormat='HH:mm' />
          <Button disabled={invalid || submitting || pristine} positive type="submit">
            Submit
          </Button>
          <Button 
            onClick={initialValues.id ? () => history.push(`/events/${initialValues.id}`) : () => history.push('/events')} 
            type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {}

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    initialValues: event
  }
}

const mapDispatchToProps = {
  createEvent,
  updateEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'eventForm', validate})(EventForm));
