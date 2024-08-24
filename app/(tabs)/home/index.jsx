import { Animated, FlatList, SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import itemProduct from "../../../components/itemProduct";
import ItemProduct from "../../../components/itemProduct";
import { Redirect, router } from "expo-router";
import Limit from "../../../components/limit";
import ProgressLimit from "../../../components/progressLimit";

const home = () => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Dyson V11 Absolute",
            price: "8230500",
            type: "Пылесос"
        },
        {
            id: 2,
            title: "Bosch WAT 2333",
            price: "2150200",
            type: "Стиральная машина"
        },
        {
            id: 3,
            title: "Huawei P40 Pro",
            price: "1410500",
            type: "Смартфон"
        },
        {
            id: 4,
            title: "Dyson V111 Absolute",
            price: "8230500",
            type: "Пылесос"
        },
        {
            id: 5,
            title: "Bosch WAT1 2333",
            price: "2150200",
            type: "Стиральная машина"
        },
        {
            id: 6,
            title: "Huawei P401 Pro",
            price: "1410500",
            type: "Смартфон"
        },
        {
            id: 7,
            title: "Huawei P411 Pro",
            price: "1410500",
            type: "Смартфон"
        },
        {
            id: 8,
            title: "Huawei P412 Pro",
            price: "1410500",
            type: "Смартфон"
        }
    ]);
    
    return (
        <SafeAreaView className={'h-full pt-3 items-center bg-bg-default'}>
            <View className={'pt-5 w-full justify-center items-center overflow-visible h-22'}>
                <Limit limit={10000000} />
                <ProgressLimit used={7020000} limit={10000000} page={'home'} />
            </View>
            <View className={'py-2 flex-1 justify-start items-start w-11/12  '}>

                <View className={' '}>
                    <Text className={'text-black text-17'}>Ранее сканировали</Text>
                </View>
                {data.length === 0 &&
                    <View className={'pt-2  mr-3 '}>
                        <Text className={'text-gray text-15 text-center'}>Сканируйте QR код, чтобы добавить товар в список</Text>
                    </View>
                }
                <ScrollView>
                    {data.length > 0 &&
                        <View className={' w-full h-full'}>
                            <FlatList
                                data={data} renderItem={
                                    ({ item }) => (<ItemProduct product={item} page={'home'} />)
                                } keyExtractor={(item) => item.id}
                                scrollEnabled={false}
                            />
                        </View>
                    }
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}
export default home;