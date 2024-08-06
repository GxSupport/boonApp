import {Text, TouchableOpacity, View} from "react-native";
import {formatSum} from "../utils/formatSum";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";

const ItemProduct = ({ product }) => {

    return (
        <View className={'w-full  rounded-2xl h-20 mt-2 bg-white'}>
            <TouchableOpacity  onPress={()=>router.push(`product/${product.id}`)} >
            <View className={'flex flex-row'}>
                <View className={'w-10/12 p-2'}>
                    <View className={' pl-2 '}>
                        <Text className={'text-15 text-black font-bold'}>{product.title}</Text>
                    </View>
                    <View className={' pl-2 pt-0.5'}>
                        <Text className={'text-13 text-gray '}>{product.type}</Text>
                    </View>
                    <View className={' pl-2 pt-0.5'}>
                        <View className={'flex flex-row'}>
                            <Text className={'text-15 text-black font-bold'}>{formatSum(product.price)}</Text>
                            <Text className={'text-15 text-gray'}> UZS</Text>
                        </View>
                    </View>
                </View>
                <View className={'w-2/12 items-center justify-center'}>
                    <Text> <MaterialIcons name={'navigate-next'} size={28} color={'gray'}/> </Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
}
export default ItemProduct;