import { router, Stack } from "expo-router";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
const IndexStact = () => {
    return <Stack >
        {/*<Stack.Screen name="login"  options={{headerShown:false}} />*/}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle: 'Информация о товаре'
        }} />
        <Stack.Screen name="setting/account/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle: 'Настройки аккаунта',
            headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="setting/payments/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle: 'Способы оплаты',
            headerTitleAlign: 'center',
            headerRight: () => (
                <Ionicons onPress={() => router.push(`/setting/addCard/1`)} name="add-sharp" size={24} color="#0080ff" />
            ),
        }} />
        <Stack.Screen name="setting/security/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle: 'Безопасность',
            headerTitleAlign: 'center'
        }} />
        <Stack.Screen
            name="setting/addCard/[id]"
            options={{
                headerBackTitleVisible: false,
                headerBackground: () => <View className={'bg-bg-default h-full'} />,
                headerTitle: 'Добавление карты',
                headerTitleAlign: 'center',
            }} />
        <Stack.Screen
            name="setting/editCard/[id]"
            options={{
                headerBackTitleVisible: false,
                headerBackground: () => <View className={'bg-bg-default h-full'} />,
                headerTitle: 'Редактирование карты',
                headerTitleAlign: 'center',
            }} />
        <Stack.Screen name="setting/decor/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle: 'Оформление',
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="order/Order" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle: 'Оформление заказа',
            headerTitleAlign: 'center',
        }} />
    </Stack>;
}
export default IndexStact;