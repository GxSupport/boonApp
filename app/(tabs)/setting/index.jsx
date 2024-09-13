import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import formatPhone from "../../../utils/formatPhone";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const SettingPage = () => {
    const { t } = useTranslation()
    const account = {
        name: 'Idsmoder',
        phone: 998913452724,
        id: 1
    }
    return (
        <ScrollView className='h-full bg-bg-default'>
            <View className={'flex justify-center items-center  h-full'}>
                <View className={'mt-10 justify-center items-center '}>
                    <View>
                        <Image source={require('../../../assets/profile/user.jpg')} className={'w-28 h-28 rounded-full'} />
                    </View>
                    <View className={'mt-3 '}>
                        <Text className={'text-19 text-black '}>Idsmoder</Text>
                    </View>
                    <View className={'mt-2 '}>
                        <Text className={'text-15 text-gray'}>{formatPhone(998913452724)}</Text>
                    </View>
                </View>
                <View className={'mt-10  justify-center items-center w-full'}>
                    <View className={'flex flex-row w-11/12  bg-white rounded-t-2xl h-16 justify-center items-center '}>
                        <View className={'w-10/12 ml-8 flex-row'}>
                            <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                                <FontAwesome name={'user'} size={24} color={'#007FFF'} />
                            </View>
                            <View className={'justify-center items-center ml-3'}>
                                <Text className={'text-15 text-black'}> {t('account_setting')} </Text>
                            </View>
                        </View>
                        <View className={'w-2/12'}>
                            <TouchableOpacity onPress={() => router.push(`/setting/account/${account.id}`)}>
                                <Entypo name={'chevron-right'} size={24} color={'gray'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className={'flex flex-row w-11/12  bg-white  h-16 justify-center items-center '}>
                        <View className={'w-10/12 ml-8 flex-row'}>
                            <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                                <Ionicons name={'card'} size={24} color={'#007FFF'} />
                            </View>
                            <View className={'justify-center items-center ml-3'}>
                                <Text className={'text-15 text-black'}> {t('payment_methods')} </Text>
                            </View>
                        </View>
                        <View className={'w-2/12'}>
                            <TouchableOpacity onPress={() => router.push(`/setting/payments/[id]`)}>
                                <Entypo name={'chevron-right'} size={24} color={'gray'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className={'flex flex-row w-11/12  bg-white  h-16 justify-center items-center '}>
                        <View className={'w-10/12 ml-8 flex-row'}>
                            <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                                <MaterialCommunityIcons name={'security'} size={24} color={'#007FFF'} />
                            </View>
                            <View className={'justify-center items-center ml-3'}>
                                <Text className={'text-15 text-black'}> {t('security')} </Text>
                            </View>
                        </View>
                        <View className={'w-2/12'}>
                            <TouchableOpacity onPress={() => router.push(`/setting/security/${account.id}`)}>
                                <Entypo name={'chevron-right'} size={24} color={'gray'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className={'flex flex-row w-11/12  bg-white rounded-b-2xl  h-16 justify-center items-center '}>
                        <View className={'w-10/12 ml-8 flex-row'}>
                            <View className={'w-10 h-10  justify-center items-center rounded-full bg-bg-icon'}>
                                <MaterialCommunityIcons name={'palette-swatch-variant'} size={24} color={'#007FFF'} />
                            </View>
                            <View className={'justify-center items-center ml-3'}>
                                <Text className={'text-15 text-black'}> {t('system_setting')} </Text>
                            </View>
                        </View>
                        <View className={'w-2/12'}>
                            <TouchableOpacity onPress={() => router.push(`/setting/decor/${account.id}`)}>
                                <Entypo name={'chevron-right'} size={24} color={'gray'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className={'mt-5 w-11/12 h-14 justify-center rounded-2xl mb-5 bg-bg-logout items-center touch-pan-down'}>
                        <View className={'flex flex-row'}>
                            <View className={'justify-center items-center rotate-180'}>
                                <Ionicons name="exit" size={20} color="#FF5865" />
                            </View>
                            <View className={'justify-center items-center ml-2'}>
                                <Text className={'text-17 text-logout'} onPress={() => router.push('/login')}> {t('logout')} </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default SettingPage;