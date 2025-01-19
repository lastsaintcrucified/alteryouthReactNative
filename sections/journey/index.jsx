import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/AntDesign';

const Journey = () => {
  const [paused, setPaused] = useState(true);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Embark on a scholarship journey</Text>
      <TouchableOpacity onPress={handlePlayPause} style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/ay_explainer.mp4')}
          style={styles.video}
          paused={paused}
          poster={require('../../assets/images/ay_video_poster.jpg')}
          resizeMode="cover"
        />
        {paused && (
          <View style={styles.icoContainer}>
            <Icon
              style={styles.icon}
              name="caretright"
              size={40}
              color="white"
            />
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.paragraph}>
        In Bangladesh, while 98% of children enroll in school, 2 million
        children drop out to work before achieving literacy in order to support
        their families financially. On the flipside, Bangladesh has a diaspora
        population of 10 million in advanced economies who wish to make an
        impact on their homeland. AlterYouth, imagine Uber for scholarships, is
        a C2C scholarship app enabling users from around the world to start
        scholarships directly for financially struggling students in Government
        Primary Schools of Bangladesh, through digital banking.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 40,
  },
  icoContainer: {
    position: 'absolute',
    top: '30%',
    left: '35%',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: '100%',
  },

  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    marginTop: 10,
  },
});

export default Journey;
