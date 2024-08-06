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
    </Stack>;
}
export default IndexStact;