import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SettingNav from './SettingNav';
import {Route, Redirect, Switch} from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './Photos/PhotosPage';
import AccountPage from './AccountPage';
import {updatePassword} from '../../auth/authActions';
import {updateProfile} from '../../user/userActions'

class SettingsDashboard extends Component {
    render() {
        const { updatePassword, providerId, user, updateProfile} = this.props;
        return (
            <Grid>
                <Grid.Column width={12}>
                    <Switch>
                        <Redirect exact from='/settings' to='settings/basic' />
                        <Route path='/settings/basic' render={() => <BasicPage initialValues={user} updateProfile={updateProfile} />} />
                        <Route path='/settings/about' render={() => <AboutPage initialValues={user} updateProfile={updateProfile} />} />
                        <Route path='/settings/photos' component={PhotosPage} />
                        <Route path='/settings/account' render={() => <AccountPage updatePassword={updatePassword} providerId={providerId} />} />
                    </Switch>
                </Grid.Column>
                <Grid.Column width={4}>
                    <SettingNav/>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapDispatchToProps = {
    updatePassword,
    updateProfile
}

const mapStateToProps = (state) => ({
    providerId: state.firebase.auth.providerData[0].providerId,
    user: state.firebase.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDashboard)
