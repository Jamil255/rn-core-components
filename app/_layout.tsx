import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { Stack } from 'expo-router'
import React from 'react'
const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
      <Stack.Screen
        name="getStart"
        options={{
          title: 'Get Start',
          headerTitleAlign: 'center',
          headerRight: () => <Entypo name="user" size={30} color="black" />,
          headerLeft: () => (
            <AntDesign
              name="bars"
              size={30}
              color="black"
              style={{ margin: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="item" options={{ title: 'Item' }} />
      <Stack.Screen name="index" options={{ title: 'Main' }} />
      <Stack.Screen name="list" />
      <Stack.Screen name="modal" />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="signup" options={{ title: 'Signup' }} />
      <Stack.Screen name="flexLayout" />
    </Stack>
  )
}

export default HomeLayout
