import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';

const Splash = ({navigation}) => {
  //   const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  const getLoggedInUser =async ()=>{
      
  }

  useEffect(() => {
    setLoading(true);
    // console.log('AGYA', number);
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Login');
    }, 1000);

    return () => console.log('Unmounted');
  }, [isFocused]);

  console.log('[Loading]:: ', loading);
  console.log('[isFocused]:: ', isFocused);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text
          style={styles.logoText}
          //   onPress={() => setLoading(prev => prev + 1)}
        >
          University of Central Punjab
        </Text>
      </View>
      <View style={styles.loading}>
        {loading ? <ActivityIndicator size={'large'} color={'red'} /> : null}
      </View>
    </View>
  );
};

export default Splash;
