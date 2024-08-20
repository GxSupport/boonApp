import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { formatSum } from "../../../utils/formatSum";
const History = () => {
    const [history, setHistory] = useState([
        {
            id: 1,
            dataName: '20-10-2024',
            data: [
                { id: 1, title: 'Purchased', device: 'smartphone', price: 100546123 },
                { id: 2, title: 'Returned', device: 'electronic', price: 50546 },
                { id: 3, title: 'Purchased', device: 'watch', price: 1508425 },
                { id: 4, title: 'Returned', device: 'samsung', price: 1007785 },
            ]
        },
        {
            id: 2,
            dataName: '25-10-2024',
            data: [
                { id: 5, title: 'Purchased', device: 'laptop', price: 200 },
                { id: 6, title: 'Returned', device: 'electronic', price: 100 },
                { id: 7, title: 'Purchased', device: 'television', price: 500 },
            ]
        },
        {
            id: 3,
            dataName: '30-10-2024',
            data: [
                { id: 8, title: 'Purchased', device: 'smartphone', price: 150 },
                { id: 9, title: 'Returned', device: 'electronic', price: 75 },
                { id: 10, title: 'Purchased', device: 'television', price: 600 },
                { id: 11, title: 'Returned', device: 'samsung', price: 200 },
            ]
        },
        {
            id: 4,
            dataName: '05-11-2024',
            data: [
                { id: 12, title: 'Purchased', device: 'tablet', price: 300 },
                { id: 13, title: 'Returned', device: 'headphones', price: 80 },
                { id: 14, title: 'Purchased', device: 'keyboard', price: 40 },
            ]
        },
        {
            id: 5,
            dataName: '10-11-2024',
            data: [
                { id: 15, title: 'Purchased', device: 'mouse', price: 20 },
                { id: 16, title: 'Returned', device: 'monitor', price: 150 },
                { id: 17, title: 'Purchased', device: 'printer', price: 100 },
            ]
        },
        {
            id: 6,
            dataName: '15-11-2024',
            data: [
                { id: 18, title: 'Purchased', device: 'camera', price: 400 },
                { id: 19, title: 'Returned', device: 'microphone', price: 60 },
                { id: 20, title: 'Purchased', device: 'speakers', price: 120 },
            ]
        },
        {
            id: 7,
            dataName: '20-11-2024',
            data: [
                { id: 21, title: 'Purchased', device: 'router', price: 80 },
                { id: 22, title: 'Returned', device: 'usb drive', price: 25 },
                { id: 23, title: 'Purchased', device: 'external hard drive', price: 150 },
            ]
        },
        {
            id: 8,
            dataName: '25-11-2024',
            data: [
                { id: 24, title: 'Purchased', device: 'smartwatch', price: 250 },
                { id: 25, title: 'Returned', device: 'tablet case', price: 30 },
                { id: 26, title: 'Purchased', device: 'charging cable', price: 15 },
            ]
        }
    ]);
    return (
        <SafeAreaView className={'px-3 bg-bg-default h-full'} >
            <ScrollView>
                <View>
                    {history.map((item) => (
                        <View key={item.id} className={'py-3'}>
                            <View>
                                <Text className={'text-19'}>
                                    21-iyul, jum<Text className={'text-sm text-slate-500'}> <Octicons name="dot-fill" size={8} /> {item.data.length} продукта </Text>
                                </Text>
                            </View>
                            {item.data.map((product) => (
                                <View key={product.id} className={'flex flex-row items-center justify-between rounded-2xl my-2 bg-white p-1 px-3 '}>
                                    <View>
                                        <Text className={'text-lg first-letter:capitalize text-slate-700'}>{product.title}</Text>
                                        <Text className={'text-sm first-letter:capitalize text-slate-400'}>{product.device}</Text>
                                        <Text className={'text-lg first-letter:capitalize text-slate-700'}>{formatSum(String(product.price))} <Text className='text-slate-400 uppercase' >UZS</Text> </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => router.push(`/product/${product.id}`)} >
                                            <MaterialIcons name={'navigate-next'} size={28} color={'gray'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default History;