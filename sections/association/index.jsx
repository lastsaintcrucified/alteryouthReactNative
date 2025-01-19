import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const Association = () => {
  return (
    <View style={styles.container}>
      {/* First Div */}
      <View style={styles.divColumn}>
        <Image
          source={require('../../assets/images/google.png')}
          style={styles.image1}
        />
        <Text style={styles.title}>Title 1</Text>
      </View>
      {/* Second Div */}
      <View style={styles.divRow}>
        <Image
          source={require('../../assets/images/undp.jpg')}
          style={styles.image2}
        />
        <Text style={styles.title}>Title 2</Text>
      </View>
      {/* Third Div */}
      <View style={styles.divColumn}>
        <Text style={styles.title}>Title 3</Text>
        <Image
          source={require('../../assets/images/expo.png')}
          style={styles.image3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 60,
  },
  divColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  divRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image1: {
    width: width / 1.8,
    height: 80,
    marginBottom: 10,
    backgroundColor: 'black',
  },
  image2: {
    width: width / 3,
    height: 180,
    marginBottom: 10,
    margin: 20,
    backgroundColor: 'black',
  },
  image3: {
    width: width / 3,
    height: 180,
    marginBottom: 10,
    margin: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Association;
