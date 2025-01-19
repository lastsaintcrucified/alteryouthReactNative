/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Home from './screens/Home';
import {DrawerLayoutAndroid, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

let {width, height} = Dimensions.get('window');

function App() {
  const drawer = React.useRef(null);
  const openDrawer = () => {
    drawer.current.openDrawer();
  };

  const closeDrawer = () => {
    drawer.current.closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={styles.drawerCon}>
          <TouchableOpacity onPress={closeDrawer} style={styles.drCls}>
            <Icon name="close" size={30} color="#1dc468" />
          </TouchableOpacity>
          <View style={styles.drwCntnt}>
            <View style={styles.drwRw1}>
              <Icon name="home" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Home</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="questioncircleo" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>How it works</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="infocirlceo" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>About</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="hearto" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Collaborate</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="Trophy" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Scholarships</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="solution1" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Scholarship policy</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="message1" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Get in touch</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="mobile1" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Get the app</Text>
            </View>
            <View style={styles.drwRw}>
              <Icon name="login" size={30} color="#1dc468" />
              <Text style={styles.drwRwTxt}>Log in</Text>
            </View>
          </View>
        </View>
      )}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.burgerIcon} onPress={openDrawer}>
              <Image
                source={require('./assets/images/burger.png')}
                style={styles.bgLogo}
              />
            </TouchableOpacity>
            <Image
              source={require('./assets/images/ay.png')}
              style={styles.logo}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar />
            <Home />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </DrawerLayoutAndroid>
  );
}
const styles = StyleSheet.create({
  drawerCon: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drCls: {
    alignSelf: 'flex-end',
  },
  drwCntnt: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drwRw: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-center',
    alignItems: 'center',
    marginTop: 20,
  },
  drwRw1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-center',
    alignItems: 'center',
    marginTop: 100,
  },
  drwRwTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 10,
  },
  txtCls: {fontSize: 18, color: 'black'},
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
    width: width,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    minHeight: 60,
    width: '100%',
  },
  bgLogo: {
    height: 24,
    width: 40,
    backgroundColor: '#1dc468',
  },
  burgerIcon: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: 'white',
    marginLeft: 10,
  },
});
export default App;
