import {Image, Text, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Entypo} from "@expo/vector-icons";

const Decor = () => {
    const icons = [
        require('../../../assets/icons/1.png'),
        require('../../../assets/icons/2.png'),
        require('../../../assets/icons/3.png'),
        require('../../../assets/icons/4.png'),
        require('../../../assets/icons/dark.png'),
        require('../../../assets/icons/white.png'),
        require('../../../assets/icons/ru.png'),
        require('../../../assets/icons/uz.png'),
    ]
    return(
        <View className={'flex justify-start h-full items-center bg-bg-default'}>
            <View className={'mt-10 w-11/12 '}>
                <View>
                    <Text className={'text-17'}>Тема приложения</Text>
                </View>
                <View className={'w-full h-12  mt-4'}>
                    <Text className={'text-13'}>Иконка приложения</Text>
                </View>
                <View className={'flex flex-row'}>
                    <View className={'rounded-lg'}>
                        <Image source={icons[0]} className={'w-16 h-16'}/>
                    </View>
                    <View className={' ml-4  '}>
                        <Image source={icons[1]} className={'w-16 h-16'}/>
                    </View>
                    <View className={' ml-4'}>
                        <Image source={icons[2]} className={'w-16 h-16'}/>
                    </View>
                    <View className={' ml-4'}>
                        <Image source={icons[3]} className={'w-16 h-16'}/>
                    </View>
                </View>
                <View className={'w-full h-12  mt-4'}>
                    <Text className={'text-13'}>Цветовая схема</Text>
                </View>
                <View className={'flex flex-row'}>
                    <View className={'justify-center items-center'}>
                        <Image source={icons[4]} className={'w-16 h-28'}/>
                        <View className={'mt-2 items-center'}>
                            <Text className={'text-13'}>Темная</Text>
                            <View className={'mt-2'}>
                                <Entypo name={'circle'} size={20} color={'gray'}/>
                            </View>
                        </View>
                    </View>
                    <View className={'ml-4 rounded-lg justify-center items-center'}>
                        <Image source={icons[5]} className={'w-16 h-28'}/>
                        <View className={'mt-2 items-center'}>
                            <Text className={'text-13'}>Светлая</Text>
                            <View className={'mt-2'}>
                                <Entypo name={'circle'} size={20} color={'gray'}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View className={'w-full h-12  mt-4'}>
                    <Text className={'text-13'}>Языковая схема</Text>
                </View>

                <View className={'border border-gray-200 flex flex-row rounded-lg   h-14  pl-1 bg-white mt-1'}>
                    <View className={'ml-3 mt-3'}>
                        <Image source={icons[6]} className={'w-8 h-8'}/>
                    </View>
                    <View className={'ml-4 mt-4'}>
                        <Text className={'text-15'}>Русский язык</Text>
                    </View>
                    <View className={'ml-40 mt-4'}>
                        <Entypo name={'circle'} size={20} color={'gray'}/>
                    </View>
                </View>
                <View className={'border border-gray-200 flex flex-row rounded-lg   h-14  pl-1 bg-white mt-4'}>
                    <View className={'ml-3 mt-3'}>
                        <Image source={icons[7]} className={'w-8 h-8'}/>
                    </View>
                    <View className={'ml-4 mt-4'}>
                        <Text className={'text-15'}>O’zbek tili</Text>
                    </View>
                    <View className={'ml-48  pt-4 items-center rounded-full'}>
                        <Entypo  name={'circle'} size={20} color={'gray'}/>
                    </View>
                </View>

            </View>
            <View className={'h-12 rounded-lg bg-btn-primary justify-center absolute bottom-5  w-11/12'}>
                <Text className={'text-center text-white'}>Изменить оформление</Text>
            </View>
        </View>
    )
}
export default Decor;