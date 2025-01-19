import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const images = [
  {
    id: 1,
    imgSrc: require('../../assets/images/community_1.jpg'),
  },
  {
    id: 2,
    imgSrc: require('../../assets/images/community_2.jpg'),
  },
  {
    id: 3,
    imgSrc: require('../../assets/images/community_3.jpg'),
  },
  {
    id: 4,
    imgSrc: require('../../assets/images/community_4.jpg'),
  },
  {
    id: 5,
    imgSrc: require('../../assets/images/community_5.jpg'),
  },
  {
    id: 6,
    imgSrc: require('../../assets/images/community_6.jpg'),
  },
  {
    id: 7,
    imgSrc: require('../../assets/images/community_7.jpg'),
  },
  {
    id: 8,
    imgSrc: require('../../assets/images/community_8.jpg'),
  },
  {
    id: 9,
    imgSrc: require('../../assets/images/community_9.jpg'),
  },
  {
    id: 10,
    imgSrc: require('../../assets/images/community_10.jpg'),
  },
  {
    id: 11,
    imgSrc: require('../../assets/images/community_11.jpg'),
  },
  {
    id: 12,
    imgSrc: require('../../assets/images/community_12.jpg'),
  },
  {
    id: 13,
    imgSrc: require('../../assets/images/community_13.jpg'),
  },
  {
    id: 14,
    imgSrc: require('../../assets/images/community_14.jpg'),
  },
  {
    id: 15,
    imgSrc: require('../../assets/images/community_15.jpg'),
  },
  {
    id: 16,
    imgSrc: require('../../assets/images/community_16.jpg'),
  },
  {
    id: 17,
    imgSrc: require('../../assets/images/community_17.jpg'),
  },
  {
    id: 18,
    imgSrc: require('../../assets/images/community_18.jpg'),
  },
];

const ImpactSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Impact</Text>
      <ScrollView horizontal style={styles.imageSlider}>
        {images.map(({imgSrc, id}) => (
          <Image key={id} source={imgSrc} style={styles.image} />
        ))}
      </ScrollView>
      <Text style={styles.paragraph}>
        Every scholarship begins with shipping a mobile phone to the parent of
        the student. Then they create their own mobile bank account using that
        phone, to start receiving their child's scholarships directly, every
        month.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  imageSlider: {
    marginBottom: 16,
  },
  image: {
    width: width / 1.1,
    height: height / 2,
    marginRight: 0,
  },
  paragraph: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default ImpactSection;
