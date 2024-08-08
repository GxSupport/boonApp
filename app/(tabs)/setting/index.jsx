import {Image, Text, TouchableOpacity, View} from "react-native";
import formatPhone from "../../../utils/formatPhone";
import {Entypo, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {router} from "expo-router";

const SettingPage = () => {
    const account = {
        name: 'Idsmoder',
        phone: 998913452724,
        id: 1
    }
    return(
        <View className={'flex justify-center items-center bg-bg-default'}>
            <View className={'mt-10 justify-center items-center '}>
                <View>
                    <Image source={require('../../../assets/profile/user.jpg')} className={'w-28 h-28 rounded-full'}/>
                </View>
                <View className={'mt-3 '}>
                    <Text className={'text-19 text-black '}>Idsmoder</Text>
                </View>
                <View className={'mt-2 '}>
                    <Text className={'text-15 text-gray'}>{formatPhone(998913452724)}</Text>
                </View>
            </View>

            <View className={'mt-10  justify-center items-center w-full'}>
                <View className={'flex flex-row w-11/12  bg-white rounded-t-2xl h-20 justify-center items-center '}>
                    <View className={'w-10/12 ml-8 flex-row'}>
                        <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                            <FontAwesome name={'user'} size={24} color={'#007FFF'}/>
                        </View>
                        <View className={'justify-center items-center ml-3'}>
                            <Text className={'text-15 text-black'}>Настройки аккаунта</Text>
                        </View>
                    </View>
                    <View className={'w-2/12'}>
                        <TouchableOpacity onPress={()=> router.push(`/setting/account/${account.id}`)}>
                            <Entypo name={'chevron-right'} size={24} color={'gray'}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className={'flex flex-row w-11/12  bg-white  h-20 justify-center items-center '}>
                    <View className={'w-10/12 ml-8 flex-row'}>
                        <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                            <Ionicons name={'card'} size={24} color={'#007FFF'}/>
                        </View>
                        <View className={'justify-center items-center ml-3'}>
                            <Text className={'text-15 text-black'}>Способы оплаты</Text>
                        </View>
                    </View>
                    <View className={'w-2/12'}>
                        <Entypo name={'chevron-right'} size={24} color={'gray'}/>
                    </View>
                </View>

                <View className={'flex flex-row w-11/12  bg-white  h-20 justify-center items-center '}>
                    <View className={'w-10/12 ml-8 flex-row'}>
                        <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                            <MaterialCommunityIcons name={'security'} size={24} color={'#007FFF'}/>
                        </View>
                        <View className={'justify-center items-center ml-3'}>
                            <Text className={'text-15 text-black'}>Безопасность</Text>
                        </View>
                    </View>
                    <View className={'w-2/12'}>
                        <Entypo name={'chevron-right'} size={24} color={'gray'}/>
                    </View>
                </View>

                <View className={'flex flex-row w-11/12  bg-white rounded-b-2xl  h-20 justify-center items-center '}>
                    <View className={'w-10/12 ml-8 flex-row'}>
                        <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                            <MaterialCommunityIcons name={'palette-swatch-variant'} size={24} color={'#007FFF'}/>
                        </View>
                        <View className={'justify-center items-center ml-3'}>
                            <Text className={'text-15 text-black'}>Оформление</Text>
                        </View>
                    </View>
                    <View className={'w-2/12'}>
                        <Entypo name={'chevron-right'} size={24} color={'gray'}/>
                    </View>
                </View>

                <View className={'mt-8 w-11/12 h-14 justify-center rounded-2xl bg-bg-logout items-center'}>
                    <View className={'flex flex-row'}>
                        <View className={'justify-center items-center'}>
                            <SimpleLineIcons name={'logout'} size={24} color={'#FF5865'}/>
                        </View>
                        <View className={'justify-center items-center ml-2'}>
                            <Text className={'text-17 text-logout'}>Выйти из аккаунта</Text>
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}
export default SettingPage;