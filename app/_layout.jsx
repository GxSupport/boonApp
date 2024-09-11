import { Stack } from "expo-router";
import { View } from "react-native";
import { Provider } from "react-redux";
import { Store } from "../store/Store";
const IndexStact = () => {
    return <Provider store={Store}>
        <Stack >
            {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
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
            }} />
            <Stack.Screen name="setting/security/[id]" options={{
                headerBackTitleVisible: false,
                headerBackground: () => <View className={'bg-bg-default h-full'} />,
                headerTitle: 'Безопасность',
                headerTitleAlign: 'center'
            }} />
            <Stack.Screen
                name="setting/addCard/add"
                options={{
                    headerBackTitleVisible: false,
                    headerBackground: () => <View className={'bg-bg-default h-full'} />,
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
        </Stack>
    </Provider>;
}
export default IndexStact;