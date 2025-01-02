import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './style' // Assuming you have external styles defined.

const GetStartScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#F68989', '#FE5150']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.bgGradientColor}
      >
        <View style={{ flex: 1.7, overflowY: 'hidden' }}>
          <Image
            style={styles.imageStyle}
            source={require('../assets/images/food assets/delivery-man 2.png')}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            flex: 0.8,
            backgroundColor: 'white',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            marginBottom: 14,
          }}
        >
          <Text style={styles.textHeading}>Quick Delivery at</Text>
          <Text style={styles.textHeading}>
            your<Text style={styles.textDoorStep}>Doorstep</Text>
          </Text>
          <Text style={styles.textDescirption}>
            Home delivery and online reservation{' '}
          </Text>
          <Text style={styles.textDescirption}>
            system for restaurants and cafe{' '}
          </Text>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

export default GetStartScreen
