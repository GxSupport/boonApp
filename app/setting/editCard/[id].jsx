import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import Button from '../../../components/Button'
import { router, useLocalSearchParams } from 'expo-router'
import { Route } from 'expo-router/build/Route'

const EditCard = () => {
  const [isSwitch, setIsSwitch] = useState(false)
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isActiveTheme, setIsActiveTheme] = useState(0)
  const [inputData, setInputData] = useState({
    cardNumber: '',
    cardType: '',
    validThru: '',
    bgImg: '',
    card_owner: '',
    cvv: ""
  })
  const handleSwitch = () => {
    setIsSwitch(!isSwitch);
    Animated.timing(animatedValue, {
      toValue: isSwitch ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const switchPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });
  const [cardTheme] = useState([
    require('../../../assets/cards/theme-3.png'),
    require('../../../assets/cards/theme-6.png'),
    require('../../../assets/cards/theme-4.png'),
    require('../../../assets/cards/theme-5.png'),
    require('../../../assets/cards/theme-1.png'),
    require('../../../assets/cards/theme-2.png'),
  ])
  const activeTheme = (param) => setIsActiveTheme(param)
  const { id } = useLocalSearchParams()
  const extraCards = [
    { id: 1, cvv: '123', cardNumber: '1111 2222 3333 4444', cardType: 'Humo', validThru: '07/23', bgImg: '', card_owner: 'Card Owner' },
    { id: 2, cvv: '123', cardNumber: '5555 6666 7777 8888', cardType: 'MasterCard', validThru: '11/21', bgImg: '', card_owner: 'Card Owner' },
    { id: 3, cvv: '123', cardNumber: '9999 0000 1111 2222', cardType: 'American Express', validThru: '09/27', bgImg: '', card_owner: 'Card Owner' }
  ]
  useEffect(() => {
    if (id) setInputData(extraCards.find(c => c.id === +id))
  }, [])

  return (
    <View className='flex flex-col items-stretch justify-between px-5 py-2 bg-bg-default h-full'>
      <ScrollView>
        <Text className='text-17 text-[#171717]' >
          Данные карты
        </Text>
        <View className='my-4' >
          <View>
            <Text className='text-11 mb-1' >
              Номер карты
            </Text>
            <TextInput value={inputData?.cardNumber} placeholder='0000 0000 0000 0000' inputMode='numeric' className='bg-white mb-3 py-1 px-3 border-slate-200 border rounded-lg' />
          </View>
          <View className='flex flex-row  justify-between' >
            <View className='w-[48%]' >
              <Text className='text-11 mb-1' >
                Срок действия карты
              </Text>
              <TextInput placeholder='00 / 00' value={inputData?.validThru} inputMode='numeric' className='bg-white mb-3 py-1  px-3 border-slate-200 border rounded-lg' />
            </View>
            <View className='w-[calc(48%)]' >
              <Text className='text-11 mb-1' >
                CVV
              </Text>
              <TextInput inputMode='numeric' value={inputData?.cvv} placeholder='*****' className='bg-white mb-3  py-1 px-3 border-slate-200 border rounded-lg' />
            </View>
          </View>
          <View>
            <Text className='text-11 mb-1' >
              Название карты
            </Text>
            <TextInput placeholder='Lorem Ipsum' className='bg-white mb-3 py-1 px-3 border-slate-200 border rounded-lg' />
          </View>
          <View className='felx flex-row justify-between items-center' >
            <Text className='text-15 mb-1'>
              Сделать основной картой
            </Text>
            <TouchableWithoutFeedback onPress={handleSwitch}>
              <View className={`relative w-12 h-7 rounded-2xl ${isSwitch ? 'bg-blue-400' : 'bg-gray-300'}`}>
                <Animated.View className={`w-6 h-6 top-[2px] bg-white rounded-full absolute`} style={{
                  left: switchPosition,
                }} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Text className='text-17 my-3'>
              Внешний вид
            </Text>
            <View className='items-center gap-1 flex-row flex' >
              {
                cardTheme.map((item, index) => (
                  <View key={index} className={`w-12 h-12 overflow-hidden border-transparent border-2 p-0.5 rounded-full ${isActiveTheme === index && 'border-blue-300'} `} onTouchStart={() => activeTheme(index)} >
                    <Image source={item} className='w-full h-full' />
                  </View>
                ))
              }
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <Button text={'Обновить карту'} />
      </View>
    </View>
  )
}

export default EditCard