import React, {Component} from 'react';
import {Modal, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal} from "./modalActions";
import RegisterForm from "../auth/Register/RegisterForm";

const mapDispatchToProps = {closeModal};

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    <Icon name='address book outline' /> Register
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, mapDispatchToProps)(RegisterModal);