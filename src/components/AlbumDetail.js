import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerTextStyle,
    thumbnailcontainerstyle,
    thumbnailstyle,
    headerContentStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
      <View style={thumbnailcontainerstyle}>
        <Image
        style={thumbnailstyle}
        source={{ uri: thumbnail_image }}
        />
      </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle} >{title}</Text>
          <Text style={headerTextStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >Buy Now!</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailstyle: {
    height: 50,
    width: 50
  },
  thumbnailcontainerstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
