import React, { useState, Fragment } from "react";
import { Header, Card, Image, Button, Icon, Popup } from "semantic-ui-react";

const UserPhotos = ({
  photos,
  profile,
  deletePhoto,
  setMainPhoto,
  loading
}) => {
  const [buttonId, setButtonId] = useState('');
  let filteredPhotos;
  if (photos) {
    filteredPhotos = photos.filter(photo => {
      return photo.url !== profile.photoURL;
    });
  }
  return (
    <Fragment>
      <Header sub color="teal" content="All Photos" />
      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={profile.photoURL || "/assets/user.png"} />
          <Button positive>Main</Button>
        </Card>
        {filteredPhotos &&
          filteredPhotos.map(photo => (
            <Card key={photo.id}>
              <Image src={photo.url} />
              <Button.Group color="green">
                <Popup
                  trigger={
                    <Button
                      loading={buttonId === photo.id ? loading : false}
                      disabled={buttonId === photo.id ? loading : false}
                      onClick={() => {setMainPhoto(photo); setButtonId(photo.id)}}
                    >
                      <Icon name="check" />
                    </Button>
                  }
                  content="Set as Main"
                  position="bottom center"
                  hideOnScroll
                />
                <Button onClick={() => deletePhoto(photo)}>
                  <Icon name="trash" />
                </Button>
              </Button.Group>
            </Card>
          ))}
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
