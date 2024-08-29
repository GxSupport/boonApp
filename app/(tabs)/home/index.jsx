import { Animated, FlatList, SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import itemProduct from "../../../components/itemProduct";
import ItemProduct from "../../../components/itemProduct";
import { Redirect, router } from "expo-router";
import Limit from "../../../components/limit";
import ProgressLimit from "../../../components/progressLimit";
import api from "../../../api/api";
import { URL } from "../../../api/const";
import axios from "axios";
import Loading from "../../../components/Loading";

const home = () => {
    const [appData, setAppData] = useState([]);
    const [isloading, setLoading] = useState(false);
    const getAppData = async () => {
        setLoading(true);
        try {
            const res = await axios(`${URL}/application/last`, {
                method: "get",
                headers: {
                    Authorization: `Bearer 6963|oner5KAxvAcP1UPXiERM3QbpgtaR8bkaWMVvQ5EJed5dffc1`
                }
            })
            if (res.status === 200) {
                setAppData(res.data)
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAppData()
    }, [])

    return (
        <SafeAreaView className={'h-full pt-3 items-center bg-bg-default'}>
            <Loading loading={isloading} />
            <View className={'p;/?t-5 w-full justify-center items-center overflow-visible h-22'}>
                <Limit limit={10000000} />
                <ProgressLimit used={7020000} limit={10000000} page={'home'} />
            </View>
            <View className={'py-2 flex-1 justify-start items-start w-11/12  '}>
                <View className={' '}>
                    <Text className={'text-black text-17'}>Limit list</Text>
                </View>
                {appData.limit_list?.data.length === 0 &&
                    <View className={'pt-2  mr-3 '}>
                        <Text className={'text-gray text-15 text-center'}>Сканируйте QR код, чтобы добавить товар в список</Text>
                    </View>
                }
                <ScrollView>
                    {appData.limit_list?.data.length > 0 &&
                        <View className={' w-full h-full'}>
                            <FlatList
                                data={appData.limit_list?.data} renderItem={
                                    ({ item, index }) => (<ItemProduct product={{ item, id: appData.id }} page={'home'} />)
                                } keyExtractor={(_, index) => index.toString()}
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