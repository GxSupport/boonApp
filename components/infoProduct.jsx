import { Text, View } from "react-native";
import { formatSum } from "../utils/formatSum";

const infoProduct = ({ info }) => {
    const maxLen = 48; // Maksimal uzunlikni belgilaymiz
    const titleDescLen = info.product_category_name.length + info.product_category_name.length; // info.title va info.descriptionning uzunligini hisoblaymiz
    const remainingLen = maxLen - titleDescLen; // Qolgan uzunlikni hisoblaymiz
    const dashes = '-'.repeat(remainingLen > 0 ? remainingLen : 0);
    // Agar qolgan uzunlik musbat bo'lsa, shuncha miqdordagi '-' belgisini yaratamiz. Aks holda, bo'sh satr yaratamiz.

    return (
        <View className={'bg-bg-default flex justify-center items-center pt-4'}>
            <View className={'w-full flex-row justify-between'}>
                <Text className={'text-17 text-gray first-letter:capitalize'}> mahsulot nomi </Text>
                <Text className={'text-15 text-gray first-letter:capitalize'}>{dashes}</Text>
                <Text className={'text-17 text-gray first-letter:capitalize'}> {info.product_category_name}</Text>
            </View>
            <View className={'w-full flex-row justify-between'}>
                <Text className={'text-17 text-gray first-letter:capitalize'}> soni </Text>
                <Text className={'text-15 text-gray first-letter:capitalize'}>{dashes}</Text>
                <Text className={'text-17 text-gray first-letter:capitalize'}> {info.count}</Text>
            </View>
            <View className={'w-full flex-row justify-between'}>
                <Text className={'text-17 text-gray first-letter:capitalize'}> sotib olish narxi </Text>
                <Text className={'text-15 text-gray first-letter:capitalize'}>{dashes}</Text>
                <Text className={'text-17 text-gray first-letter:capitalize'}> {formatSum(info.purchase_price)}</Text>
            </View>
            <View className={'w-full flex-row justify-between'}>
                <Text className={'text-17 text-gray first-letter:capitalize'}> sotish narxi </Text>
                <Text className={'text-15 text-gray first-letter:capitalize'}>{dashes}</Text>
                <Text className={'text-17 text-gray first-letter:capitalize'}> {formatSum(info.sale_price)}</Text>
            </View>
            <View className={'w-full flex-row justify-between'}>
                <Text className={'text-17 text-gray first-letter:capitalize'}> sotib olingan </Text>
                <Text className={'text-15 text-gray first-letter:capitalize'}>{dashes}</Text>
                <Text className={'text-17 text-gray first-letter:capitalize'}> {info.purchase ?? "yo'q"}</Text>
            </View>
        </View>
    )

}
export default infoProduct;