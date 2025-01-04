import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: 'About',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="Feeedback"
          options={{
            drawerLabel: 'Feeedback',
            title: 'Feeedback',
          }}
        />
        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: 'Contact',
            title: 'Contact',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default _layout
