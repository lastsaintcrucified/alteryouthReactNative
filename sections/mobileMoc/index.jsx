import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import AppStoreSVG from '../../assets/icons/appstore_small.svg';
import PlayStoreSVG from '../../assets/icons/playstore_small.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
  {
    id: 'd1',
    image: require('../../assets/images/app_graduation.png'),
    title: 'Transfer directly',
    subtitle:
      "Your scholarship is transferred directly to your student's family on their mobile bank account.",
  },
  {
    id: 'd2',
    image: require('../../assets/images/app_scholarship.jpg'),
    title: 'Monitor progress',
    subtitle:
      "View attendance data and report cards from your student's school, until completion of Class 5.",
  },
  {
    id: 'd3',
    image: require('../../assets/images/app_school.png'),
    title: 'Ensure a literate citizen',
    subtitle:
      'Your scholarship continues until completion of class 5, when your student achieves literacy.',
  },
  // Add more items as needed
];

const MobileMoc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Uber</Text>
      <Text style={styles.title}>for Scholarships</Text>
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>A platform connecting the world</Text>
        <Text style={styles.subtitle}>
          with financially struggling students in
        </Text>
        <Text style={styles.subtitle}>
          Government Primary Schools of Bangladesh
        </Text>
      </View>
      <View style={styles.storeContainer}>
        <AppStoreSVG width={120} height={50} />
        <PlayStoreSVG width={120} height={50} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}>
        {data.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemTitleContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'black',
    marginBottom: 2,
  },
  flatList: {
    alignItems: 'center',
  },
  storeContainer: {
    width: width / 1.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  itemContainer: {
    width: width / 1.4,
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: height / 1.4,
    marginBottom: 10,
  },
  itemTitleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginTop: 12,
  },
  itemTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 16,
    color: 'black',
  },
});

export default MobileMoc;
