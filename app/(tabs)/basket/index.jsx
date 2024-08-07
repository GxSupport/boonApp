import {FlatList, Text, View} from "react-native";
import ProgressLimit from "../../../components/progressLimit";
import ItemProduct from "../../../components/itemProduct";
import {useState} from "react";
import {Entypo} from "@expo/vector-icons";
import {formatSum} from "../../../utils/formatSum";

const Basket = () => {
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
    return (
        <View className={'flex-1   pt-3 items-center bg-bg-default relative '}>
            <ProgressLimit used={7020000} limit={10000000} page={'basket'}/>

            <View className={'mt-5 justify-start items-start w-11/12 '}>
                <View className={'pt-2 flex flex-row'}>
                    <View>

                        <Text className={'text-black text-17 font-bold'}>Корзина </Text>
                    </View>
                    <View className={'mt-1 -ml-2 flex flex-row'}>
                        <Entypo  name={'dot-single'} size={16} color={'gray'}/>
                        <Text className={'text-gray -mt-0.5 -ml-1  text-13'}>{data.length} товара</Text>
                    </View>

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
                            ({item}) => (<ItemProduct product={item} page={'basket'}/>)
                        } keyExtractor={(item) => item.title}/>
                    </View>
                }
            </View>
            <View className={'w-full  absolute rounded-t-3xl bg-white h-28 z-10  bottom-14'}>
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
                        <View className={'rounded-lg bg-btn-primary p-3 items-center'}>
                            <Text className={'text-white text-15'}>Перейти к оформлению</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Basket;