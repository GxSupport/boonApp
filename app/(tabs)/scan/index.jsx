import { View, Text, Button, StatusBar, StyleSheet, Linking, AppState } from "react-native";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import React, { useCallback, useEffect, useRef } from "react";
import { requestCameraPermissionsAsync } from "expo-camera/legacy";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import api from "../../../api/api";
import extractDynamicPart from "../../../utils/extractDynamicPart";
import { router } from "expo-router";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function Scan() {
    const [hasPermission, setHasPermission] = useCameraPermissions();
    const qrLock = useRef(false)
    const appState = useRef(AppState.currentState)
    const successCode = async (barcode) => {
        if (barcode.data && extractDynamicPart(barcode.data)) {
            router.push(`/product/${extractDynamicPart(barcode.data)}`)
        }
        else {
            showMessage({
                message: 'Failed to scan, show another qr code',
                type: "danger",
                duration: 3000,
                style: { top: 30 }
            });

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
            <FlashMessage position="top" />
            <CameraView
                facing="back"
                onBarcodeScanned={(barcode) => {
                    if (barcode && !qrLock.current) {
                        qrLock.current = true;
                        successCode(barcode)
                        setTimeout(async () => {
                            qrLock.current = false;
                        }, 1000);
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