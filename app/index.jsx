import { StatusBar } from 'expo-status-bar';
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import * as Secure from 'expo-secure-store';

export default function Index() {
    const [progress, setProgress] = useState(0);

    const [token, setToken] = useState(null);

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
        }, 100);
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

    return <Redirect href={'home'} />;
}


