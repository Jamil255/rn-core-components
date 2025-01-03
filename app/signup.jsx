import { Link, useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useGlobalSearchParams } from 'expo-router'

const SignUpScreen = () => {
  const name = useGlobalSearchParams()
  const navigation  = useNavigation()
  console.log(name)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = () => {
    setEmail('')
    setPassword('')
  }
//   useEffect(() => {
//     navigation.setOptions({ title: name })
//   }, [])

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

        <View style={{ justifyContent: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Signup</Text>
        </View>

        <View style={{ marginTop: 16, width: '80%', alignItems: 'center' }}>
          <TextInput
            style={styles.inputText}
            placeholder="Please enter an email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={{ marginTop: 16, width: '80%', alignItems: 'center' }}>
          <TextInput
            style={styles.inputText}
            placeholder="Please enter a password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <View style={{ marginTop: 19, width: '80%' }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={onSubmitHandler}
          >
            <Text style={{ color: 'white' }}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>
            Already have an account? <Link href="/login">Login</Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: '#041a3d',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#041a3d',
    padding: 17,
    borderRadius: 8,
    alignItems: 'center',
  },
})
