import {FlatList, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Entypo} from "@expo/vector-icons";
import {useState} from "react";
import itemProduct from "../../../components/itemProduct";
import ItemProduct from "../../../components/itemProduct";

const home = () => {
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
    return(
        <View className={'flex-1   pt-3 items-center'}>
            <View>
                <Text className={'text-center text-19 '}>Главная</Text>
            </View>
            <View className={'pt-5 w-full justify-center items-center overflow-visible h-22'}>
                <View className={' w-11/12 rounded-2xl  bg-blue-500 overflow-hidden z-10'}>
                    <View className={'absolute  w-40 h-40 rounded-full  -mt-16 -ml-24 bg-blue-400'}>
                        <Text>test</Text>
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
                        <Text className={'text-19 text-white font-bold'}>10 000 000 UZS</Text>
                    </View>
                </View>
                <View className={'w-11/12 rounded-b-2xl  bg-white -mt-3 h-28 z-0'}>
                    <View className={'pt-10  items-center'}>
                        <View className={' bg-gray-200 w-10/12 rounded-2xl h-2'}>
                        </View>
                    </View>
                    <View className={'pt-1  items-center'}>
                        <View className={' w-10/12 '}>
                            <View className={'flex flex-row'}>
                                <View className={'flex-1 h-5  w-6/12'}>
                                    <Text className={'text-11 text-gray'}>Использовано</Text>
                                </View>
                                <View className={'flex-1 h-5  w-6/12 items-end'}>
                                    <Text className={'text-11 text-gray '}>Можно потратить</Text>
                                </View>
                            </View>
                            <View className={'flex flex-row'}>
                                <View className={'flex-1 h-5  w-6/12'}>
                                    <View>
                                        <View className={'flex flex-row'}>
                                            <Text className={'text-13 text-black font-bold'}>0</Text>
                                            <Text className={'ml-1 text-13 text-gray'}>UZS</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className={'flex-1 h-5  w-6/12 items-end'}>
                                    <View className={'flex flex-row'}>
                                        <Text className={'text-13 text-black font-bold'}>10 000 000</Text>
                                        <Text className={'ml-1 text-13 text-gray'}>UZS</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
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