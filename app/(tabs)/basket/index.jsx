import { FlatList, Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import ProgressLimit from "../../../components/progressLimit";
import ItemProduct from "../../../components/itemProduct";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { formatSum } from "../../../utils/formatSum";
import { router } from "expo-router";

const Basket = () => {
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
    const platform = Platform.OS;
    return (
        <SafeAreaView className={'items-center bg-bg-default h-full'}>
            <ProgressLimit used={7020000} limit={10000000} page={'basket'} />
            <View className={' justify-start items-start w-11/12 flex-1 py-2 '}>
                <View className={' flex flex-row'}>
                    <View>
                        <Text className={'text-black text-17 font-bold'}>Корзина </Text>
                    </View>
                    <View className={'mt-1 -ml-2 flex flex-row'}>
                        <Entypo name={'dot-single'} size={16} color={'gray'} />
                        <Text className={'text-gray -mt-0.5 -ml-1  text-13'}>{data.length} товара</Text>
                    </View>
                </View>
                {data.length === 0 &&
                    <View className={'  mr-3 '}>
                        <Text className={'text-gray text-15 text-center'}>Сканируйте QR код, чтобы добавить товар в список</Text>
                    </View>
                }
                {data.length > 0 &&
                    <ScrollView>
                        <View className={platform === 'ios' ? ' w-full' : 'w-full h-full   '}>
                            <FlatList
                                data={data} renderItem={
                                    ({ item }) => (<ItemProduct product={item} page={'basket'} />)
                                } keyExtractor={(item) => item.title}
                                scrollEnabled={false}
                            />
                        </View>
                    </ScrollView>
                }
            </View>
            <View className={
                platform === 'ios' ? 'w-full  sticky rounded-t-3xl bg-white h-28 z-10  bottom-20' :
                    'w-full  sticky rounded-t-3xl bg-white h-28 z-10  bottom-0'
            }>
                <View className={'flex flex-row  m-3'}>
                    <View className={'flex-1'}>
                        <Text className={'text-15 text-gray'}>Итого:</Text>
                    </View>
                    <View className={'flex-1 items-end'}>
                        <View className={'flex flex-row'}>
                            <Text className={'text-15 text-black font-bold'}>{formatSum(14122000)}</Text>
                            <Text className={'ml-1 text-gray'}>UZS</Text>
                        </View>

                    </View>
                </View>
                <View className={'flex flex-row  h-20 m-3 '}>
                    <View className={'flex-1'}>
                        <View className={'rounded-lg bg-btn-primary p-3 items-center'} onTouchStart={() => router.push('order/Order')} >
                            <Text className={'text-white text-15'}>Перейти к оформлению</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Basket;