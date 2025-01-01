import { Link } from 'expo-router'
import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
// #041a3d
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmitHandler = () => {
    console.log(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
            source={require('../assets/images/DB2019AL01950_web_1600-removebg-preview.png')}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <Text
            style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'arial' }}
          >
            Login
          </Text>
        </View>

        <View
          style={{
            marginTop: 16,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={styles.inputText}
            placeholder="please enter a email"
            value={email}
            inputMode="email"
            placeholderTextColor="#041a3d"
            onChangeText={(e) => setEmail(e)}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={styles.inputText}
            placeholder="please enter a password"
            value={password}
            secureTextEntry={true}
            inputMode="text"
            onChangeText={(e) => setPassword(e)}
          />
        </View>

        <View style={{ marginTop: 19, width: '80%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#041a3d',
              padding: 17,
              color: 'white',
              borderRadius: 8,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onSubmitHandler}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: 'arial', fontSize: 15 }}>
            Didn't have an account? <Link href="/signup">Signup</Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: '#041a3d',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
})
