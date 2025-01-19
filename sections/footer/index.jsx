import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Learn About Alter Youth</Text>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>About Us</Text>
      <Text style={styles.text}>How it works</Text>
      <Text style={styles.text}>Scholarship poicy</Text>
      <View style={styles.divider} />
      <Text style={styles.text}>Towards a literate Bangladesh</Text>
      <View style={styles.iconContainer}>
        <Icon name="facebook" size={20} color="black" style={styles.lgImg} />
        <Icon name="instagram" size={20} color="black" style={styles.lgImg1} />
      </View>
      <View style={styles.divider} />
      <Text style={styles.text}>&#169; 2025 AlterYouth limited</Text>
      <Text style={styles.text}>Terms of service-Privacy Policy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff6f6',
    padding: 20,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  lgImg: {
    width: 40,
    marginLeft: 0,
    marginTop: 10,
  },
  lgImg1: {
    width: 40,
    marginLeft: -10,
    marginTop: 10,
  },
  text: {
    marginBottom: 5,
    color: 'black',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
});

export default Footer;
