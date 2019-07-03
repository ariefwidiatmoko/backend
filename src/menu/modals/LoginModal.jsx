import React, {Component} from 'react';
import {Modal, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import LoginForm from '../auth/Login/LoginForm';
import {closeModal} from "./modalActions";

class LoginModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    <Icon name='sign-in' /> Sign In
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <LoginForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapDispatchToProps = {closeModal};

export default connect(null, mapDispatchToProps)(LoginModal);