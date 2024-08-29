import { Alert, Text, TouchableOpacity, View } from "react-native";
import { formatSum } from "../utils/formatSum";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const ItemProduct = ({ product, page }) => {
    const deleteProduct = () => {
        Alert.alert(
            "Удаление товара",
            "Вы уверены, что хотите удалить товар?",
            [
                {
                    text: "Отмена",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Удалить", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
    return (
        <View className={'w-full   rounded-2xl h-20 mt-4 bg-white'}>
            <View className={'flex flex-row'}>
                <View className={'w-10/12 p-2'}>
                    <View className={' pl-2 '}>
                        <Text className={'text-15 text-black font-bold'}>{product.item?.month_text}</Text>
                    </View>
                    <View className={' pl-2 pt-0.5'}>
                        <Text className={'text-13 text-gray '}>prepayment: {product.item?.prepayment}</Text>
                    </View>
                    <View className={' pl-2 pt-0.5'}>
                        <View className={'flex flex-row'}>
                            <Text className={'text-15 text-black font-bold'}>{formatSum(product.item?.limit)}</Text>
                            <Text className={'text-15 text-gray'}> UZS</Text>
                        </View>
                    </View>
                </View>
                <View className={'w-2/12 items-center justify-center'}>
                    {page === 'home' ?
                        <TouchableOpacity onPress={() => router.push(`/product/${product?.id}`)} >
                            <MaterialIcons name={'navigate-next'} size={28} color={'gray'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={deleteProduct} >
                            <Entypo name={'cross'} size={20} color={'gray'} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );
}
export default ItemProduct;