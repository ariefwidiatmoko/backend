import React from "react";
import { Grid, Segment, Header, Image } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

const UserPhoto = ({ photos }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />

        <Image.Group size="small">
          {photos &&
            photos.map(photo => (
              <LazyLoad key={photo.name} height={150} placeholder={<Image src='/assets/image.png' />}>
                <Image src={photo.url} />
              </LazyLoad>
            ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserPhoto;
