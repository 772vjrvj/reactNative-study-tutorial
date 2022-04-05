import React, {useEffect, useState, useRef} from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import _ from 'lodash';

const TrainingStart = ({route}) => {
  const time = route.params.sec;
  const maxInterNum = time.substring(0, 1) * 5;
  const maxNum = Number(route.params.item);
  const ranNum = Math.floor(Math.random() * maxNum);
  const [sec, setSec] = useState(ranNum);
  const interArray = useRef([]);
  const count = useRef(0);
  const DATA = [
    {image: require('img/pic/1.png')},
    {image: require('img/pic/2.png')},
    {image: require('img/pic/3.png')},
    {image: require('img/pic/4.png')},
    {image: require('img/pic/5.png')},
    {image: require('img/pic/6.png')},
    {image: require('img/pic/7.png')},
    {image: require('img/pic/8.png')},
    {image: require('img/pic/9.png')},
    {image: require('img/pic/10.png')},
    {image: require('img/pic/11.png')},
    {image: require('img/pic/12.png')},
    {image: require('img/pic/13.png')},
    {image: require('img/pic/14.png')},
    {image: require('img/pic/15.png')},
    {image: require('img/pic/16.png')},
    {image: require('img/pic/17.png')},
    {image: require('img/pic/18.png')},
    {image: require('img/pic/19.png')},
    {image: require('img/pic/20.png')},
    {image: require('img/pic/21.png')},
    {image: require('img/pic/22.png')},
    {image: require('img/pic/23.png')},
    {image: require('img/pic/24.png')},
    {image: require('img/pic/25.png')},
    {image: require('img/pic/26.png')},
    {image: require('img/pic/27.png')},
    {image: require('img/pic/28.png')},
    {image: require('img/pic/29.png')},
    {image: require('img/pic/30.png')},
    {image: require('img/pic/31.png')},
    {image: require('img/pic/32.png')},
    {image: require('img/pic/33.png')},
    {image: require('img/pic/34.png')},
    {image: require('img/pic/35.png')},
    {image: require('img/pic/36.png')},
    {image: require('img/pic/37.png')},
    {image: require('img/pic/38.png')},
    {image: require('img/pic/39.png')},
    {image: require('img/pic/40.png')},
    {image: require('img/pic/41.png')},
    {image: require('img/pic/42.png')},
    {image: require('img/pic/43.png')},
    {image: require('img/pic/44.png')},
    {image: require('img/pic/45.png')},
    {image: require('img/pic/46.png')},
    {image: require('img/pic/47.png')},
    {image: require('img/pic/48.png')},
    {image: require('img/pic/49.png')},
    {image: require('img/pic/50.png')},
    {image: require('img/pic/51.png')},
    {image: require('img/pic/52.png')},
    {image: require('img/pic/53.png')},
    {image: require('img/pic/54.png')},
    {image: require('img/pic/55.png')},
    {image: require('img/pic/56.png')},
    {image: require('img/pic/57.png')},
    {image: require('img/pic/58.png')},
    {image: require('img/pic/59.png')},
    {image: require('img/pic/60.png')},
    {image: require('img/pic/61.png')},
    {image: require('img/pic/62.png')},
    {image: require('img/pic/63.png')},
    {image: require('img/pic/64.png')},
    {image: require('img/pic/65.png')},
    {image: require('img/pic/66.png')},
    {image: require('img/pic/67.png')},
    {image: require('img/pic/68.png')},
    {image: require('img/pic/69.png')},
    {image: require('img/pic/70.png')},
    {image: require('img/pic/71.png')},
    {image: require('img/pic/72.png')},
    {image: require('img/pic/73.png')},
    {image: require('img/pic/74.png')},
    {image: require('img/pic/75.png')},
    {image: require('img/pic/76.png')},
    {image: require('img/pic/77.png')},
    {image: require('img/pic/78.png')},
  ];
  let intervalValue = '';

  useInterval(() => {
    if (count.current === 0 || count.current === maxInterNum + 1) {
      count.current = 0;
      interArray.current = _.fill(Array(maxInterNum), ranNum);
      interArray.current = [...interArray.current, 77];
    }
    setSec(interArray.current[count.current]);
    count.current++;
  }, 200);

  function useInterval(callback, delay) {
    const savedCallback = useRef(null);

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      function setIntervalFn(tick, delay) {
        intervalValue = setInterval(() => {
          tick();
        }, delay);
      }

      if (delay !== null) {
        setIntervalFn(tick, delay);
        return () => clearInterval(intervalValue);
      }
    }, [delay]);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={DATA[77].image}
        style={{height: 700, width: 400, marginBottom: 40}}>
        <Image style={styles.arrowImage} source={DATA[`${sec}`].image} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 700,
    width: 400,
    marginBottom: 40,
  },
  arrowImage: {
    height: 700,
    width: 400,
    marginBottom: 40,
  },
});

export default TrainingStart;
