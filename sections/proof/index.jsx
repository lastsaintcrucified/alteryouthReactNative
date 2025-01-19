import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProofSection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/headteacher.jpg')}
        style={styles.imageBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Are you a teacher? Get your students listed on the platform
          </Text>
          <TouchableOpacity style={styles.anchorContainer}>
            <Text style={styles.anchor}>Download the school app</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../assets/images/person.jpg')}
        style={styles.imageBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>You can be anywhere in the world</Text>
          <TouchableOpacity style={styles.anchorContainer}>
            <Text style={styles.anchor}>See all scholarships</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../assets/images/applicant.jpg')}
        style={styles.imageBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            While students get closer to their dreams
          </Text>
          <TouchableOpacity style={styles.anchorContainer}>
            <Text style={styles.anchor}>See all graduate</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  imageBackground: {
    width: width / 1.1,
    height: height / 1.6,
    justifyContent: 'flex-start',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'flex-start',
    width: width / 1.4,

    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  anchorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  anchor: {
    color: 'white',
    fontSize: 18,
  },
  arrow: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
  },
});

export default ProofSection;
