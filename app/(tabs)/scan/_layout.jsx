import { Stack } from "expo-router";
import { View } from "react-native";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}