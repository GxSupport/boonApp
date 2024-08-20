import { FlatList, Text, TouchableOpacity, View } from "react-native";
import InfoProduct from "../../components/infoProduct";
const id = () => {
    const info = {
        id: 1,
        title: 'Samsung Galaxy S21',
        type: 'Смартфон',
        price: 1000000,
        description: 'Samsung Galaxy S21 - это смартфон с 6.2-дюймовым дисплеем, процессором Exynos 2100, 8 ГБ оперативной памяти и 128 ГБ встроенной памяти, тройной основной камерой на 64+12+12 Мп и фронтальной камерой на 10 Мп, аккумулятором на 4000 мАч, поддержкой 5G и работающий на Android 11.'
    }
    const fullInfos = [
        {
            title: 'Операционная система',
            description: 'Android 11'
        },
        {
            title: 'Процессор',
            description: 'Exynos 2100'
        },
        {
            title: 'Оперативная память',
            description: '8 ГБ'
        },
        {
            title: 'Встроенная память',
            description: '128 ГБ'
        },
        {
            title: 'Дисплей',
            description: '6.2 дюйма'
        },
        {
            title: 'Камера',
            description: '64+12+12 Мп'
        },
        {
            title: 'Фронтальная камера',
            description: '10 Мп'
        },
        {
            title: 'Аккумулятор',
            description: '4000 мАч'
        },
        {
            title: 'Поддержка 5G',
            description: 'Да'
        }

    ]
    return (
        <View className={'bg-bg-default flex justify-center items-center'}>
            <View className={' w-11/12'}>
                <View className={'pt-5'}>
                    <Text className={'text-17 text-black'}>{info.title}</Text>
                </View>

                <View className={'pt-5'}>
                    <Text className={'text-15 text-black'}>О товаре</Text>
                </View>
                <View className={'pt-2'}>
                    <Text className={'text-13 text-gray'}>{info.description}</Text>
                </View>
                <View className={'pt-5'}>
                    <Text className={'text-15 text-black'}>Подробности</Text>
                </View>
                <View className={'pt-2'}>
                    <FlatList
                        data={fullInfos}
                        renderItem={({ item }) => (<InfoProduct info={item} />)}
                        keyExtractor={(item) => item.title}
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