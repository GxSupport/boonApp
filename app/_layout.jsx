import {Stack} from "expo-router";
import {View} from "react-native";

const IndexStact = () => {

    return <Stack >
        {/*<Stack.Screen name="login"  options={{headerShown:false}} />*/}
        <Stack.Screen name="(tabs)" options={{headerShown:false}} />
        <Stack.Screen name="product/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle:'Информация о товаре'
        }} />
        <Stack.Screen name="setting/account/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle:'Настройки аккаунта'
        }} />
        <Stack.Screen name="setting/payments/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle:'Способы оплаты'
        }} />
        <Stack.Screen name="setting/security/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle:'Безопасность'
        }} />
        <Stack.Screen name="setting/decor/[id]" options={{
            headerBackTitleVisible: false,
            headerBackground: () => <View className={'bg-bg-default h-full'} />,
            headerTitle:'Оформление'
        }} />


    </Stack>;
}
export default IndexStact;