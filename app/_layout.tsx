import { Stack } from 'expo-router'
import React from 'react'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="switch"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="modal"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen name="not-found" options={{ headerShown: false }} />
    </Stack>
  )
}

export default HomeLayout
