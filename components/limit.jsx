import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { formatSum } from "../utils/formatSum";
import { useTranslation } from "react-i18next";
const colorArray = {
    0: ['bg-blue-500', 'bg-blue-400'],
    1: ['bg-slate-900', 'bg-slate-600'],
    2: ['bg-green-700', 'bg-green-600'],
    3: ['bg-cyan-700', 'bg-cyan-600'],
}

const Limit = ({ limit, setState, title = null, index = 0 }) => {
    const { t } = useTranslation()
    return (
        <View onTouchStart={() => setState(true)} className={`w-11/12 rounded-2xl overflow-hidden z-10 ${colorArray?.[index] ? colorArray?.[index]?.[0] : colorArray?.[index -= 2]?.[0]} `} >
            <View className={`absolute  w-40 h-40 rounded-full -mt-16 -ml-24 ${colorArray?.[index] ? colorArray?.[index]?.[1] : colorArray?.[index -= 2]?.[1]}`} >
            </View>
            <View className={'items-center pt-3 flex-row justify-center'}>
                <View className={'p-1'}>
                    <Entypo className={'static'} name={'wallet'} size={17} color={'white'} />
                </View>
                <View className='flex flex-row justify-center items-center gap-2' >
                    <Text className={'text-17 static text-white'}> {t('limit_amount')} </Text>
                </View>
            </View>
            <View className={'items-center pt-2 pb-3 flex-row justify-center'}>
                <Text className={'text-19 text-white font-bold'}>{formatSum(limit)} </Text>
                <Text className={'text-white font-bold'} >
                    {t('Uzs')}
                </Text>
                <Text className={'text-19 text-center text-white font-bold'}>  {title} {t('month_text')}</Text>
            </View>
        </View>
    )
}
export default Limit;