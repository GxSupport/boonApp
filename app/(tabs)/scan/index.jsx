import {View, Text, Button} from "react-native";
import {CameraView, useCameraPermissions} from "expo-camera";
import React, {useState} from "react";
import {requestCameraPermissionsAsync} from "expo-camera/legacy";
import {router} from "expo-router";
import {Entypo} from "@expo/vector-icons";

export default  function Scan(){
    const [hasPermission, setHasPermission] = useCameraPermissions();
    const successCode = (barcode) => {
        console.log(barcode)
    }
    if (!hasPermission) {
        return <View>
            <Text>Для сканирования QR кода необходимо разрешение на использование камеры</Text>
        </View>
    }
    if (!hasPermission.granted) {
        return <View>
            <Text>Для сканирования QR кода необходимо разрешение на использование камеры</Text>
            <Button title={'Разрешить'} onPress={requestCameraPermissionsAsync}/>
        </View>
    }

    return(
        <View>
            <CameraView
                onBarcodeScanned={(barcode) => successCode(barcode)}
                stopScanningAfterResult={true}
                BarcodePoint={{
                    type: 'rect',
                }}
                BarcodeSettings={{
                    barcodeTypes: ['qr']
                }}
                BarcodeSize={{
                    height: 200,
                    width:200

                }}





                className={'w-full h-full'}
            ></CameraView>
        </View>
    )
}
