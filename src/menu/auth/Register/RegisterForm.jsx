import React from 'react';
import {connect} from 'react-redux'
import {combineValidators, isRequired} from 'revalidate';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import {registerUser, socialLogin} from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';

const validate = combineValidators({
  displayName: isRequired('Display name'),
  email: isRequired('Email'),
  password: isRequired('Password')
})

const RegisterForm = ({handleSubmit, registerUser, error, invalid, submitting, socialLogin}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && <div style={{marginBottom: 12}}><Label color='red'>{error}</Label></div>}
          <Button loading={submitting} disabled={invalid || submitting} fluid size="large" color="teal">
            Register
          </Button>
          <Divider horizontal>Or</Divider>
          <SocialLogin socialLogin={socialLogin}/>
        </Segment>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {
  registerUser, socialLogin
}

export default connect(null, mapDispatchToProps)(reduxForm({form: 'registerForm', validate})(RegisterForm));