import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerBackground: () => <View className={'bg-bg-default h-full' } />,
                headerTitle: 'История',
                headerTitleAlign: 'center',
                headerTitleStyle: { color: 'black', fontSize: 19 }, 
            }} />
        </Stack>
    )
}