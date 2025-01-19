import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import SvgSingleMother from '../../assets/icons/SingleMother';
import SvgDisabledFather from '../../assets/icons/DisabledFather';
import SvgOrphan from '../../assets/icons/Orphan';
const width = Dimensions.get('window').width;

const EligibilitySection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scholarship Eligibility</Text>
      <Text style={styles.paragraph}>
        Only students who are currently enrolled in Government Primary Schools
        and fall under any of the following criteria are eligible to apply for
        scholarships
      </Text>
      <View>
        <View style={styles.card}>
          <SvgDisabledFather width={80} height={40} />
          <View style={styles.textContainer}>
            <Text style={styles.txtTitle}>Disabled Father</Text>
            <Text style={styles.txtSubtitle}>
              Student's father is physically unable to work
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <SvgOrphan width={80} height={40} />
          <View style={styles.textContainer}>
            <Text style={styles.txtTitle}>Orphan</Text>
            <Text style={styles.txtSubtitle}>
              Both parents are deceased or have abandoned the child
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <SvgSingleMother width={80} height={40} />
          <View style={styles.textContainer}>
            <Text style={styles.txtTitle}>Single Mother</Text>
            <Text style={styles.txtSubtitle}>
              Student's father is deceased or has abandoned the family
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  tagline: {
    fontSize: 22,
    color: '#1dc468',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    marginBottom: 20,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    width: width / 1.1,
    padding: 20,
    marginVertical: 10,
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  txtTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtSubtitle: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 5,
  },
});

export default EligibilitySection;
