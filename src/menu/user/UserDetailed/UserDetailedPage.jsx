import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import {Grid} from 'semantic-ui-react'
import UserHeader from "./UserHeader";
import UserAbout from "./UserAbout";
import UserPhoto from "./UserPhoto";
import UserEvents from "./UserEvents";
import UserSidebar from "./UserSidebar";
import { userDetailedQuery as query } from "../../user/UserQueries";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { getUserEvents, followUser, unfollowUser } from "../userActions";

class UserDetailedPage extends Component {
  async componentDidMount() {
    await this.props.getUserEvents(this.props.userUid, 3);
  }

  changeTab = (e, data) => {
    this.props.getUserEvents(this.props.userUid, data.activeIndex);
  };

  render() {
    const {
      auth,
      profile,
      photos,
      match,
      requesting,
      events,
      eventsLoading, 
      followUser, 
      following, 
      unfollowUser
    } = this.props;
    const isCurrentUser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a === true);
    const isFollowing = !isEmpty(following);

    if (loading) return <LoadingComponent />;

    return (
      <Grid>
        <UserHeader auth={auth} profile={profile} />
        <UserAbout profile={profile} />
        <UserSidebar 
          isCurrentUser={isCurrentUser}
          isFollowing={isFollowing} 
          profile={profile} 
          followUser={followUser} 
          unfollowUser={unfollowUser}
          />
        {photos && photos.length > 0 && <UserPhoto photos={photos} />}
        <UserEvents
          events={events}
          eventsLoading={eventsLoading}
          changeTab={this.changeTab}
        />
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile;
  } else {
    profile =
      !isEmpty(state.firestore.ordered.profile) &&
      state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    profile,
    userUid,
    events: state.events.userEvents,
    eventsLoading: state.async.loading,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting, 
    following: state.firestore.ordered.following
  };
};

const mapDispatchToProps = {
  getUserEvents, 
  followUser, 
  unfollowUser
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect((auth, userUid, match) => query(auth, userUid, match))
)(UserDetailedPage);
