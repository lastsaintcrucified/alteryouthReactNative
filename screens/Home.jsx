import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeroSection from '../sections/hero';
import JoinCard from '../sections/joinCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeroSection />
      <JoinCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
  },
  headerText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Home;
