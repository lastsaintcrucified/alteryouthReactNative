import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;

const testimonials = [
  {
    id: 't1',
    nameTst: 'shimul',
    countryImgSrc: require('../../assets/images/swdn.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
      {
        imgSrc: require('../../assets/images/ht2.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't2',
    nameTst: 'rabeya',
    countryImgSrc: require('../../assets/images/arm.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't3',
    nameTst: 'pinku',
    countryImgSrc: require('../../assets/images/bd.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
      {
        imgSrc: require('../../assets/images/ht2.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't4',
    nameTst: 'shimul',
    countryImgSrc: require('../../assets/images/swdn.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
      {
        imgSrc: require('../../assets/images/ht2.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },

  {
    id: 't5',
    nameTst: 'pinku',
    countryImgSrc: require('../../assets/images/swdn.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
      {
        imgSrc: require('../../assets/images/ht2.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't6',
    nameTst: 'rabeya',
    countryImgSrc: require('../../assets/images/bd.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't7',
    nameTst: 'shimul',
    countryImgSrc: require('../../assets/images/swdn.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
      {
        imgSrc: require('../../assets/images/ht2.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't8',
    nameTst: 'rabeya',
    countryImgSrc: require('../../assets/images/arm.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
  {
    id: 't9',
    nameTst: 'pinku',
    countryImgSrc: require('../../assets/images/swdn.png'),
    students: [
      {
        imgSrc: require('../../assets/images/ht1.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
      {
        imgSrc: require('../../assets/images/ht2.jpeg'),
        name: 'Mosammot Shuborna, Class 3',
        school: 'Futkibaari Government Primary School',
      },
    ],
    scholarshipNum: 2,
  },
];

const Card = ({nameTst, countryImgSrc, students}) => (
  <View style={styles.card}>
    <View style={styles.cardContainer1}>
      <View style={styles.cardContainer2}>
        <View style={styles.cardContainer3}>
          <Text style={styles.cardContainer3Text}>@{nameTst}</Text>
          <Image source={countryImgSrc} alt="Flag" style={styles.countryImg} />
        </View>
        <Text style={styles.cardContainer3Text1}>2 scholarships</Text>
      </View>
      <Text style={styles.cardContainer3Text2}>joined today</Text>
    </View>
    {students.map(({imgSrc, name, school}) => (
      <View key={imgSrc} style={styles.studentContainer}>
        <Image source={imgSrc} alt="boy image" style={styles.studentImg} />
        <View style={styles.studentContainer2}>
          <Text style={styles.studentContainer2Text}>{name}</Text>
          <Text style={styles.studentContainer2Text1}>{school}</Text>
        </View>
      </View>
    ))}
  </View>
);

const Community = () => {
  const [testArr, setTestArr] = useState(testimonials);
  const handleArray = () => {
    const newTestimonials = testimonials.slice(0, 3);
    setTestArr([...testArr, ...newTestimonials]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tagline}>#alteryouthrevolution</Text>
      <Text style={styles.title}>The Scholrship Community</Text>
      <Text style={styles.paragraph}>
        Despite public primary schools being free of cost in Bangladesh, many
        students still drop out of school to work and earn in order to support
        their families. Your scholarship helps a child attend school and support
        their families at the same time.
      </Text>
      <View>
        {testArr.map(({students, id, countryImgSrc, nameTst}) => (
          <Card
            key={id}
            students={students}
            countryImgSrc={countryImgSrc}
            nameTst={nameTst}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleArray} style={styles.btn}>
        <Text style={styles.btnText}>see more</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.start}>Join today</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  card: {
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
  },
  cardContainer1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardContainer2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 10,
  },
  cardContainer3: {
    flexDirection: 'row',
    alignItems: 'flex-center',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  cardContainer3Text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  countryImg: {
    width: 20,
    height: 10,
    alignSelf: 'center',
    marginLeft: 5,
  },
  cardContainer3Text1: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1dc468',
    backgroundColor: '#eff6f6',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  cardContainer3Text2: {
    color: 'gray',
    fontSize: 10,
  },
  studentContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  studentContainer2: {
    marginLeft: 10,
  },
  studentContainer2Text: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: 'black',
  },
  studentContainer2Text1: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: 'gray',
  },
  studentImg: {
    height: 35,
    width: 35,
    borderRadius: 35,
  },
  cardTitle: {
    fontSize: 18,
    color: 'black',
  },
  btn: {
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  btnText: {
    fontWeight: 'bold',
    color: '#1dc468',
  },
  start: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});

export default Community;
