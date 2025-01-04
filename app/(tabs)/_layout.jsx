import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="Contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout
