import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { formatSum } from "../utils/formatSum";
import { Ionicons } from "@expo/vector-icons";

export default function ModalComponent({ visible, setState, data }) {
  const [showIndex, setShowIndex] = useState(0);
  const [quit, setQuit] = useState(1);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={visible}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <Pressable onPress={() => setState(false)} style={styles.extraContent}>
        </Pressable>

        <View className={'h-1/2'} >
          <View style={styles.card} >
            <ScrollView >
              {
                data?.map((item, index) => (
                  <Pressable className={'w-full'} key={index.toString()}
                    onPress={() => setShowIndex(index)}
                  >
                    <View className={'w-full mb-5 flex flex-row justify-between px-5 items-center border-2 rounded-xl border-blue-600 bg-[#007FFF] h-[56px]'}>
                      <View>
                        <Text className='text-white' >
                          {
                            index === showIndex ? 'Основной лимит' : 'Доп. лимит'
                          }
                        </Text>
                        <Text className='text-white' >
                          {item?.month_text}
                        </Text>
                      </View>
                      <View className='flex flex-row gap-2 items-center' >
                        <Text className='text-white ml-2' >
                          {formatSum(item?.limit)}
                        </Text>
                        <Text className='text-white'> UZS</Text>
                        <Ionicons name={showIndex === index ? "radio-button-on" : 'radio-button-off'} color={showIndex === index ? 'blue' : 'white'} size={18} />
                      </View>
                    </View>
                  </Pressable>
                ))
              }
            </ScrollView>
            <TouchableOpacity
              className='bg-[#007FFF] p-[15px] rounded-[8px] w-[95%] mx-auto mt-[20px]'
              onPress={() => setState(false)}
            >
              <Text
                className={'text-white font-semibold text-center'}
              >
                Выбрать лимит
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    minHeight: "50%",
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  extraContent: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
});