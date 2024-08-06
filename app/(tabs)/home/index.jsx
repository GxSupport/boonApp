import {FlatList, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Entypo} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import itemProduct from "../../../components/itemProduct";
import ItemProduct from "../../../components/itemProduct";
import {Redirect, router} from "expo-router";
import Limit from "../../../components/limit";
import ProgressLimit from "../../../components/progressLimit";

const home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([
        {
            id:1,
            title:"Dyson V11 Absolute",
            price:"8230500",
            type:"Пылесос"
        },
        {
            id:2,
            title:"Bosch WAT 2333",
            price:"2150200",
            type:"Стиральная машина"
        },
        {
            id:3,
            title:"Huawei P40 Pro",
            price:"1410500",
            type:"Смартфон"
        }
    ]);
    useEffect(() => {
        if (!loading) {
            <Redirect href={'/product/1'}/>
        }


    }, [loading]);
    return(
        <View className={'flex-1   pt-3 items-center bg-bg-default'}>
            {/*<View>*/}
            {/*    <Text className={'text-center text-19 '}>Главная</Text>*/}
            {/*</View>*/}
            <View className={'pt-5 w-full justify-center items-center overflow-visible h-22'}>
                <Limit limit={10000000}/>
                <ProgressLimit used={7020000} limit={10000000}/>
            </View>
            <View className={'mt-5 justify-start items-start w-11/12 '}>
                <View className={'pt-2'}>
                    <Text className={'text-black text-17'}>Ранее сканировали</Text>
                </View>
                {data.length === 0 &&
                    <View className={'pt-2  mr-3 '}>
                        <Text className={'text-gray text-15 text-center'}>Сканируйте QR код, чтобы добавить товар в список</Text>
                    </View>
                }
                {data.length > 0 &&
                    <View className={'pt-2 w-full'}>
                        <FlatList
                            data={data} renderItem={
                            ({item}) => (<ItemProduct product={item}/>)
                        } keyExtractor={(item) => item.title}/>
                    </View>
                }
            </View>

        </View>
    )
}
export default home;