import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ToastManager from 'toastify-react-native';

const height = Dimensions.get('window').height;

const HeroSection = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/hero_home_phone.jpg')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <ToastManager
          position="top"
          positionValue={10}
          duration={4000}
          animationStyle="upInUpOut"
          showCloseIcon={false}
        />

        <Text style={styles.headline}>Start your </Text>
        <Text style={styles.headline}>scholarship</Text>
        <Text style={styles.tagline}>Directly for students in Government</Text>
        <Text style={styles.tagline}>Primary Schools throughout</Text>
        <Text style={styles.tagline}>Bangladesh</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 1.5,
  },
  overlay: {
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  headline: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
  },
});

export default HeroSection;
