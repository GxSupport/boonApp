import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import themeContext from "../../../theme/themeContext";

export default () => {
    const { t } = useTranslation()
    const Th = useContext(themeContext)
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerBackground: () => <View className={'bg-bg-default h-full'} style={{ backgroundColor: Th.backgroundColor }} />,
                headerTitle: t('history'),
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 19 },
                headerTintColor: Th.color
            }} />
        </Stack>
    )
}