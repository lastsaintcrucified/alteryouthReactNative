import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import HeroSection from '../sections/hero';
import JoinCard from '../sections/joinCard';
import MobileMoc from '../sections/mobileMoc';
import Community from '../sections/community';
import ImpactSection from '../sections/impact';
import SchoolSection from '../sections/school';
import EligibilitySection from '../sections/eligibility';
import ProofSection from '../sections/proof';
import Journey from '../sections/journey';
import Association from '../sections/association';
import Footer from '../sections/footer';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeroSection />
      <JoinCard />
      <MobileMoc />
      <Community />
      <ImpactSection />
      <SchoolSection />
      <EligibilitySection />
      <ProofSection />
      <Journey />
      <Association />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
    position: 'relative',
  },
});

export default Home;
