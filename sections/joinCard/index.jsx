import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-international-phone-number';
import ToastManager, {Toast} from 'toastify-react-native';

const JoinCard = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(1);
  const [usd, setUsd] = useState(15.3);

  const handleInputValue = phoneNumber => {
    setInputValue(phoneNumber);
  };

  const handleSelectedCountry = country => {
    setSelectedCountry(country);
  };
  const handleIncrement = e => {
    e.preventDefault();
    if (count < 3) {
      setCount(count + 1);
      setUsd(usd + 15.3);
    } else {
      Toast.warn('Scholarship limit reached for current scholarship session');
    }
  };

  const handleDecrement = e => {
    e.preventDefault();

    if (count > 1) {
      setCount(count - 1);
      setUsd(usd - 15.3);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Join the</Text>
      <Text style={styles.tag}>#alteryouthrevolution</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#bac4cf"
      />
      <TextInput
        style={styles.input}
        placeholder="Your email"
        placeholderTextColor="#bac4cf"
      />
      <View style={styles.phnInpt}>
        <PhoneInput
          value={inputValue}
          onChangePhoneNumber={handleInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          phoneInputStyles={{
            flagContainer: {
              backgroundColor: 'white',
            },
            divider: {
              backgroundColor: 'white',
            },
          }}
        />
        <View style={styles.phnVw}>
          <Text>
            Country: {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
          </Text>
          <Text>
            Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
          </Text>
        </View>

        <View style={styles.usdContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.schlTxt}>Number of scholarships</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={e => handleDecrement(e)}
                style={count < 3 ? styles.btn2 : styles.btn1}>
                <Text style={styles.incrDcr}>-</Text>
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity
                onPress={e => handleIncrement(e)}
                style={count < 3 ? styles.btn1 : styles.btn2}>
                <Text style={styles.incrDcr}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.currContainer}>
            <Text style={styles.currTxt}>USD {usd.toFixed(2)}/</Text>
            <Text style={styles.currSm}>month</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.start}>Start now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: -80,
  },
  phnInpt: {width: '100%', flex: 1, borderColor: '#bac4cf', borderRadius: 10},
  usdContainer: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'between',
    alignItems: 'start',
  },
  schlTxt: {
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  currContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  currTxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  currSm: {
    fontSize: 10,
    color: 'black',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
  },
  incrDcr: {
    color: 'white',
    fontSize: 25,
  },
  count: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    backgroundColor: '#eff6f6',
  },
  btn1: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#1dc468',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#bac4cf',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  phnVw: {
    marginTop: 0,
  },
  tag: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1dc468',
    marginBottom: 10,
  },
  leftContainer: {justifyContent: 'start', alignItems: 'start', marginTop: -10},
  input: {
    height: 50,
    borderColor: '#bac4cf',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
  },
  startBtn: {
    width: '100%',
    backgroundColor: '#1dc468',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
  start: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});

export default JoinCard;
