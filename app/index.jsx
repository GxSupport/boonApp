import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { Redirect, router, useNavigation } from "expo-router";
import * as Secure from 'expo-secure-store';
import LottieView from 'lottie-react-native';
import initialRender from '../assets/loadingFirst.json'
export default function Index() {
  const [progress, setProgress] = useState(0);
  const [token, setToken] = useState(null);
  const navigation = useNavigation()


  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerShown: false,
    });
  }, [navigation])

  useEffect(() => {
    Secure.setItem('access_token', 'test');
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    });
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (progress === 100) {
      if (!token) {
        router.push('home');
      } else {
        router.push('home');
      }
    }

  }, [progress, token, router]);

  return (
    <View style={styles.container}>
      <LottieView
        source={initialRender}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
});
