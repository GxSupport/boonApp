import { FlatList, Text, TouchableOpacity, View } from "react-native";
import InfoProduct from "../../components/infoProduct";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Token, URL } from "../../api/const";
import Loading from "../../components/Loading";
const id = () => {
    const [isLoading, setLoading] = useState(false)

    const [singleInfo, setSingleInfo] = useState(null)
    const { params } = useRoute();

    const getSingleProduct = async () => {
        setLoading(true)
        if (params.id) {
            try {
                const res = await axios(`${URL}/application/get/${params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${Token}`,
                    }
                });
                console.log(JSON.stringify(res.data.task, null, 2));
                setSingleInfo(res.data?.task)
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
    }
    useEffect(() => {
        getSingleProduct()
    }, [params.id])

    return (
        <View className={'bg-bg-default flex justify-center items-center'}>
            <View className={' w-11/12'}>
                <View className={'pt-5'}>
                    <Text className={'text-17 text-black'}>{singleInfo?.status_name}</Text>
                </View>
                <View className={'pt-5'}>
                    <Text className={'text-15 text-black'}>О товаре</Text>
                </View>
                <View className={'pt-2'}>
                    <Text className={'text-13 text-gray'}>{singleInfo?.products[0].product}
                    </Text>
                </View>
                <View className={'pt-5'}>
                    <Text className={'text-15 text-black'}>Подробности</Text>
                </View>
                <View className={'pt-2'}>
                    <Loading loading={isLoading} />
                    <FlatList
                        data={singleInfo?.products}
                        renderItem={({ item, index }) => (<InfoProduct info={item} />)}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            </View>
            <View className={'w-11/12 justify-end end-1'}>
                <TouchableOpacity className={'bg-btn-primary h-12 pb-0 mt-5 rounded-md items-center justify-center'}>
                    <Text className={'text-white text-15'}>Добавить в корзину</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default id;

