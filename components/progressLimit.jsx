import {Text, View} from "react-native";
import {formatSum} from "../utils/formatSum";
import {useEffect, useState} from "react";

const ProgressLimit = ({ used, limit }) => {
    const [finish, setFinish] = useState(false);
    const [residual, setResidual] = useState(0);
    const [residualProgress, setResidualProgress] = useState(0);
    const [usedProgress, setUsedProgress] = useState(0);

    useEffect(() => {
        const resi = limit - used;
        setResidual(resi);
        setResidualProgress(Math.floor(Math.floor((resi / limit) * 100)/10));


        setUsedProgress(Math.floor(Math.floor((used / limit) * 100)/10));

        setFinish(true);
    }, [finish, used, limit]);

    return (
        <View className={'w-11/12 rounded-b-2xl  bg-white -mt-3 h-28 z-0'}>

                <View className={'pt-10  flex justify-center items-center  '}>
                    <View className={'flex-row w-10/12 '}>
                        <View className={`bg-blue-400  rounded-2xl h-2 w-10/12`}  >
                        </View>
                        <View className={`bg-gray-200   rounded-2xl h-2 w-2/12`}  >
                        </View>
                    </View>

                </View>


            <View className={'pt-1  items-center'}>
                <View className={' w-10/12 '}>
                    <View className={'flex flex-row'}>
                        <View className={'flex-1 h-5  w-6/12'}>
                            <Text className={'text-11 text-gray'}>Использовано</Text>
                        </View>
                        <View className={'flex-1 h-5  w-6/12 items-end'}>
                            <Text className={'text-11 text-gray '}>Можно потратить</Text>
                        </View>
                    </View>
                    <View className={'flex flex-row'}>
                        <View className={'flex-1 h-5  w-6/12'}>
                            <View>
                                <View className={'flex flex-row'}>
                                    <Text className={'text-13 text-black font-bold'}>{formatSum(used)}</Text>
                                    <Text className={'ml-1 text-13 text-gray'}>UZS</Text>
                                </View>
                            </View>
                        </View>
                        <View className={'flex-1 h-5  w-6/12 items-end'}>
                            <View className={'flex flex-row'}>
                                <Text className={'text-13 text-black font-bold'}>{formatSum(residual)}</Text>
                                <Text className={'ml-1 text-13 text-gray'}>UZS</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default ProgressLimit;