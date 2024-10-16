import React, { useContext, useEffect } from "react";
import { formatSum } from "../utils/formatSum";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import themeContext from "../theme/themeContext";

export default function ModalComponent({ visible, setState, data, _id }) {
  const [showIndex, setShowIndex] = React.useState(null);
  const Th = useContext(themeContext)
  useEffect(() => {
    setShowIndex(_id)
  }, [_id])
  const closeMOdal = () => {
    setState(false)
    setShowIndex(_id)
  }
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      className={'relative'}
      statusBarTranslucent={true}
    >
      <Pressable className='h-[55%]' style={styles.extrContent} onPress={closeMOdal} />
      <View style={[styles.content, { backgroundColor: Th.black_bg_Color }]} className='h-[50%] relative -top-[5%] bg-white z-50 rounded-t-[30px] p-5 py-10' >
        <ScrollView style={styles.card} >
          {
            data?.map((item, index) => (
              <Pressable className={'w-full'} key={index.toString()}
                onPress={() => setShowIndex(item?.guidFinProduct)}
              >
                <View className={`w-full mb-5 flex flex-row justify-between px-5 items-center border-2 rounded-xl h-[56px] ${(showIndex === item?.guidFinProduct) ? 'border-blue-600 bg-[#007FFF]' : 'border-gray-200 bg-[#EBEBEB]'}`}>
                  <View>
                    <Text className={`${showIndex === item?.guidFinProduct ? 'text-white' : 'text-zinc-900'} font-semibold `} >
                      {
                        showIndex === item?.guidFinProduct ? 'Основной лимит' : 'Доп. лимит'
                      }
                    </Text>
                    <Text className={showIndex === item?.guidFinProduct ? 'text-white' : 'text-[#737373]'} >
                      {item?.month_text}
                    </Text>
                  </View>
                  <View className='flex flex-row gap-2 items-center' >
                    <Text className={`${showIndex === item?.guidFinProduct ? 'text-white' : 'text-[#007FFF]'} ml-2`} >
                      {formatSum(item?.limit)}
                    </Text>
                    <Text className={showIndex === item?.guidFinProduct ? 'text-white' : 'text-zinc-900'}> UZS</Text>
                    <Ionicons name={showIndex === item?.guidFinProduct ? "radio-button-on" : 'radio-button-off'} color={showIndex === item?.guidFinProduct ? 'blue' : 'gray'} size={18} />
                  </View>
                </View>
              </Pressable>
            ))
          }
        </ScrollView>
        <View>
          <TouchableOpacity className='w-full flex items-center bg-[#007FFF] rounded-xl justify-center h-[56px]' onPress={closeMOdal}>
            <Text className='text-white text-17'>
              Выбрать лимит
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  extrContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
});















