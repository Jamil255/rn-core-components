import { Stack } from 'expo-router'
import React from 'react'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="getStart"
        options={{ headerShown: false,  }}
          />
      <Stack.Screen
        name="home"
        options={{ headerShown: false,  }}
          />
          
      <Stack.Screen
        name="index"
        options={{ headerShown: false,  }}
      />
      <Stack.Screen name="switch" options={{ headerShown: false }} />
      <Stack.Screen
        name="list"
        options={{ headerShown: false,  }}
      />
      <Stack.Screen
        name="modal"
        options={{ headerShown: false,  }}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="flexLayout"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  )
}

export default HomeLayout
