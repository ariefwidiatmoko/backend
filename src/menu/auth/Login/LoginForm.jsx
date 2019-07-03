import React from 'react';
import {combineValidators, isRequired} from 'revalidate';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import {login, socialLogin} from '../authActions'
import { connect } from 'react-redux'
import SocialLogin from '../SocialLogin/SocialLogin';

const validate = combineValidators({
  email: isRequired('Email'),
  password: isRequired('Password')
})

const LoginForm = ({login, handleSubmit, error, submitting, invalid, socialLogin}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)} autoComplete='off' >
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <div style={{marginBottom: 12}}><Label color='red'>{error}</Label></div>}
        <Button loading={submitting} disabled={invalid || submitting} fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

const mapDispatchToProps = {
  login, socialLogin
}

export default connect(null, mapDispatchToProps)(reduxForm({form: 'loginForm', validate})(LoginForm));