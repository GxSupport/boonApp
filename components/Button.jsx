import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { SkypeIndicator } from 'react-native-indicators'

function Button({ text = null, handle = null, loading = false }) {
  return (
    <Pressable className='bg-blue-500 py-3 rounded-[8px]' onPress={handle} >
      <Text className='text-15 text-center text-white'>
        {loading ?
          <SkypeIndicator color={'white'} size={21} />
          : text}
      </Text>
    </Pressable>
  )
}

export default Button