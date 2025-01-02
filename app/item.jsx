import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const Item = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* header  */}
      <View style={{ flex: 0.3 }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ width: 30, height: 30, marginLeft: 8 }}
            source={require('../assets/images/food assets/Expand Arrow.png')}
          />
          <View
            style={{
              marginRight: 8,
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/images/food assets/Heart.png')}
            />
          </View>
        </View>
      </View>

      {/* main  */}
      <View
        style={{
          flex: 2.5,
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ color: '#4F4F4F', fontSize: 22, fontWeight: 'bold' }}>
            Melting Cheese
          </Text>
          <Text style={{ color: '#FE5150', fontSize: 18, textAlign: 'center' }}>
            $<Text style={{ color: '#4F4F4F', fontSize: 20 }}>7.49</Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: -2 }}>
          <Image
            style={{ width: 272, height: 268 }}
            resizeMode="contain"
            source={require('../assets/images/food assets/Pizza 4.png')}
          />
        </View>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Image
            style={{ width: 20, height: 20, backgroundColor: '#FE5150' }}
            source={require('../assets/images/food assets/Subtract.png')}
          />
          <Text style={{ color: '#4F4F4F', fontSize: 20, marginTop: -5 }}>
            2
          </Text>
          <Image
            style={{ width: 20, height: 20, backgroundColor: '#FE5150' }}
            source={require('../assets/images/food assets/Plus Math.png')}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ opacity: 0.6, fontSize: 16 }}>$19.3</Text>
        </View>
      </View>

      {/* section  */}
      <View
        style={{
          flex: 0.4,
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/food assets/Ellipse 4.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ opacity: 0.6, fontSize: 14 }}>$ 6.9</Text>
          <Text style={{ fontSize: 18 }}>8 inch</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/food assets/Radio Button.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ opacity: 0.6, fontSize: 14 }}>$ 8.9</Text>
          <Text style={{ fontSize: 18 }}> 12 inch</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/food assets/Ellipse 4.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ opacity: 0.6, fontSize: 14 }}>$ 12.9</Text>
          <Text style={{ fontSize: 18 }}>16 inch</Text>
        </View>
      </View>

      {/* footer */}
      <View style={{ flex: 1, marginTop: 24 }}>
        <View
          style={{
            marginTop: 14,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/images/food assets/Star.png')} />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 2,
                fontSize: 18,
              }}
            >
              4.9
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/images/food assets/Emoji.png')} />
            <Text style={{ fontSize: 18 }}>44 Calories</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/images/food assets/Time.png')} />
            <Text style={{ fontSize: 18 }}>20 - 30 min</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginVertical: 'auto',
            marginHorizontal: 'auto',
            backgroundColor: '#FE5150',
            width: '75%',
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10%',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Item
