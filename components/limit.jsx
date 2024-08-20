import {Text, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import React from "react";
import {formatSum} from "../utils/formatSum";

const Limit = ({ limit, setLimit }) => {
    return (
        <View className={' w-11/12 rounded-2xl  bg-blue-500 overflow-hidden z-10'}>
            <View className={'absolute  w-40 h-40 rounded-full  -mt-16 -ml-24 bg-blue-400'}>

            </View>
            <View className={'items-center pt-3 flex-row justify-center'}>
                <View className={'p-1'}>
                    <Entypo className={'static'}  name={'wallet'} size={12} color={'white'}/>
                </View>
                <View>
                    <Text className={'text-13 static text-white'}>Сумма лимита</Text>
                </View>
            </View>
            <View className={'items-center pt-2 pb-3'}>
                <Text className={'text-19 text-white font-bold'}>{formatSum(limit)} UZS</Text>
            </View>
        </View>
    )
}
export default Limit;