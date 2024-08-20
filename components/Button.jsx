import React from 'react'
import { Pressable, Text } from 'react-native'

function Button({ text = null, handle = null }) {
  return (
    <Pressable className='bg-blue-500 py-3 rounded-[8px]' onPress={handle} >
      <Text className='text-15 text-center text-white'> {text} </Text>
    </Pressable>
  )
}

export default Button