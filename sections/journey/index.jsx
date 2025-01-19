import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Video from 'react-native-video';

const Journey = () => {
  const [paused, setPaused] = useState(true);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journey</Text>
      <TouchableOpacity onPress={handlePlayPause} style={styles.videoContainer}>
        {/* <Video
          source={require('../../assets/videos/ay_explainer.mp4')}
          style={styles.video}
          paused={paused}
          poster={require('../../assets/images/ay_video_poster.jpg')}
          resizeMode="cover"
        /> */}
        {paused && <Text style={styles.playButton}>Play</Text>}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
  },
});

export default Journey;
