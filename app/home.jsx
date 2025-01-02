import React from 'react'
import { View, Text, Image } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* header  */}
      <View style={{ flex: 0.4, marginTop: 14 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 8 }}
            source={require('../assets/images/food assets/Menu.png')}
          />
          <View
            style={{
              backgroundColor: '#FE5150',
              justifyContent: 'center',
              borderRadius: '50%',
              padding: 7,
              marginRight: 8,
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/images/food assets/Search.png')}
            />
          </View>
        </View>
      </View>

      {/* banner */}
      <View style={{ flex: 0.5 }}>
        <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
          <Text style={{ color: '#FE5150', fontSize: 18, marginBottom: 5 }}>
            Hi Alex
          </Text>
          <Text style={{ color: '#4F4F4F', fontWeight: 'bold' }}>
            Find Your Delicious Food
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 20, marginHorizontal: 9 }}>
          <View>
            <Image
              style={{ width: 44, height: 44 }}
              source={require('../assets/images/food assets/Food Type 1.png')}
            />
            <Text style={{ fontSize: 10 }}>Fast Food</Text>
          </View>
          <View>
            <Image
              style={{ width: 44, height: 44 }}
              source={require('../assets/images/food assets/Food Type 1 (1).png')}
            />
            <Text style={{ fontSize: 10 }}>Italian</Text>
          </View>
          <View>
            <Image
              style={{ width: 44, height: 44 }}
              source={require('../assets/images/food assets/Food Type 1 (2).png')}
            />
            <Text style={{ fontSize: 10 }}>Japanese</Text>
          </View>
          <View>
            <Image
              style={{ width: 44, height: 44 }}
              source={require('../assets/images/food assets/Scorpion.png')}
            />
            <Text style={{ fontSize: 10 }}>Ses Food</Text>
          </View>
        </View>
      </View>

      {/* main  */}
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              color: '#4F4F4F',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Popular
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 1,
          }}
        >
          <View style={{ flex: 0.5, marginTop: -10 }}>
            <Image
              style={{ width: 200, height: 300 }}
              source={require('../assets/images/food assets/Melting Cheese Pizza.png')}
              resizeMode="contain"
            />
          </View>

          <View style={{ flex: 0.5 }}>
            <Image
              style={{ width: 200, height: 300 }}
              source={require('../assets/images/food assets/Melting Cheese Pizza (1).png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#FE5150',
            justifyContent: 'center',
            padding: 28,
            borderRadius: '40%',
            marginBottom: 16,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>Menu</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
