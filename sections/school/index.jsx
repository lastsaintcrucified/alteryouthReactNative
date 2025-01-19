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
    id: 'i1',
    name: 'Agla Government Primary School',
    location: 'Kayetpara',
    imgSrc: require('../../assets/images/school1.jpeg'),
  },
  {
    id: 'i2',
    name: 'Kanchan Government Primary School',
    location: 'Kanchan',
    imgSrc: require('../../assets/images/school2.jpeg'),
  },
  {
    id: 'i3',
    name: 'Daudpur Government Primary School',
    location: 'Daudpur',
    imgSrc: require('../../assets/images/school3.jpeg'),
  },
  {
    id: 'i4',
    name: 'Bhulta Government Primary School',
    location: 'Bhulta',
    imgSrc: require('../../assets/images/school4.jpeg'),
  },
  {
    id: 'i5',
    name: 'Deboi Government Primary School',
    location: 'Rupganj',
    imgSrc: require('../../assets/images/school5.jpeg'),
  },
  {
    id: 'i6',
    name: 'Birabo Government Primary School',
    location: 'Bholabo',
    imgSrc: require('../../assets/images/school6.jpeg'),
  },
  {
    id: 'i7',
    name: 'Deboi Government Primary School',
    location: 'Rupganj',
    imgSrc: require('../../assets/images/school7.jpeg'),
  },
];

const SchoolSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Students from Government Primary Schools Nationwide
      </Text>
      <ScrollView horizontal style={styles.imageSlider}>
        {images.map(({imgSrc, id, name, location}) => (
          <View id={id} style={styles.imgContainer}>
            <Image source={imgSrc} style={styles.image} />
            <Text style={styles.imgTtl}>{name}</Text>
            <View style={styles.loc}>
              <Image
                source={require('../../assets/images/loc.jpg')}
                style={styles.locImg}
              />
              <Text style={styles.imgSbTtl}>{location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    marginTop: 10,
    marginBottom: 25,
    color: 'black',
  },
  imgTtl: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  imgSbTtl: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gray',
  },
  loc: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  locImg: {
    width: 15,
    height: 15,
    marginRight: 20,
  },
  imgContainer: {
    width: width / 1.3,
  },
  imageSlider: {
    marginBottom: 16,
  },
  image: {
    width: width / 1.5,
    height: height / 4,
    marginRight: 15,
    borderRadius: 10,
  },
});

export default SchoolSection;
