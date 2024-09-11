import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import * as Secure from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
export default function Index() {
  const [progress, setProgress] = useState(0);
  const [token, setToken] = useState(null);

  const navigations = useNavigation()

  useEffect(() => {
    navigations.setOptions({
      title: "",
      headerShown: false,
    })
  }, [])

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


  const [loaded, error] = useFonts({
    "syne": require('../assets/fonts/Syne-Bold.ttf'),
  })

  SplashScreen.preventAutoHideAsync();
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boonText} >
        Tehno {'\n'}BOON
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#007FFF"
  },
  boonText: {
    color: 'white',
    fontSize: 50,
    fontFamily: "syne",
    lineHeight: 45,
  },
});
