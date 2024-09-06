import { View, Text, Button, StatusBar, StyleSheet, Linking, AppState } from "react-native";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import React, { useCallback, useEffect, useRef } from "react";
import { requestCameraPermissionsAsync } from "expo-camera/legacy";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { Token, URL } from "../../../api/const";

export default function Scan() {
    const [hasPermission, setHasPermission] = useCameraPermissions();
    const qrLock = useRef(false)
    const appState = useRef(AppState.currentState)
    const successCode = async (barcode) => {
        qrLock.current = false
        // console.log('barcode', JSON.stringify(barcode, null, 2));
        try {
            const result = await axios(`${URL}/application/product_parse`, {
                data: {
                    product_url: barcode?.data,
                    task_id: 1,
                },
                headers: {
                    'Authorization': `Bearer ${Token}`,
                }
            })
            console.log('parsed product', JSON.stringify(result.data, null, 2));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        const subscription = AppState.addEventListener("change", (nextAppState) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === "active"
            ) {
                qrLock.current = false;
            }
            appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
        };
    }, []);

    if (!hasPermission) {
        return <View style={styles.container} >
            <Text style={styles.cameraText}>Для сканирования QR кода необходимо разрешение на использование камеры</Text>
        </View>
    }
    if (!hasPermission.granted) {
        useFocusEffect(
            useCallback(() => {
                StatusBar.setBarStyle('default');
                return () => {
                    StatusBar.setBarStyle('dark-content');
                };
            }, []))
        return (
            <View style={styles.container} >
                <Text style={styles.cameraText}>Для сканирования QR кода необходимо разрешение на использование камеры</Text>
                <Button title={'Разрешить'} onPress={requestCameraPermissionsAsync} />
            </View>
        )
    }
    return (
        <SafeAreaView>
            <CameraView
                facing="back"
                onBarcodeScanned={(barcode) => {
                    if (barcode && !qrLock.current) {
                        qrLock.current = true;
                        setTimeout(async () => {
                            qrLock.current = false;
                            await Linking.openURL(barcode.data);
                            successCode(barcode)
                        }, 500);
                    }
                }}
                className={'w-full, h-full'}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    cameraText: {
        color: 'white',
        paddingHorizontal: 5,
        lineHeight: 25
    },

})