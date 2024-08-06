import {Text, View} from "react-native";

const infoProduct = ({ info }) => {
    const maxLen = 48; // Maksimal uzunlikni belgilaymiz
    const titleDescLen = info.title.length + info.description.length; // info.title va info.descriptionning uzunligini hisoblaymiz
    const remainingLen = maxLen - titleDescLen; // Qolgan uzunlikni hisoblaymiz
    const dashes = '-'.repeat(remainingLen > 0 ? remainingLen : 0);
    // Agar qolgan uzunlik musbat bo'lsa, shuncha miqdordagi '-' belgisini yaratamiz. Aks holda, bo'sh satr yaratamiz.


    return (
        <View className={'bg-bg-default flex justify-center items-center pt-4'}>
            <View className={'w-full flex-row justify-between'}>
                <Text className={'text-17 text-gray'}>{info.title}</Text>
                <Text className={'text-15 text-gray'}>{dashes}</Text>
                <Text className={'text-15 text-black'}>{info.description}</Text>
            </View>
        </View>
    )

}
export default infoProduct;