import React from 'react'
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native'

const MyComponent = () => {
  const array = [
    { title: 'one' },
    { title: 'two' },
    { title: 'three' },
    { title: 'three' },
    { title: 'three' },
    { title: 'three' },
    { title: 'three' },
    { title: 'three' },
    { title: 'three' },
    { title: 'three' },
  ] // Example empty array

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={array}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No items available</Text>
        )}
        horizontal={false}
        onRefresh={() => console.log('refreshing')}
        refreshing={true}
        contentContainerStyle={array.length === 0 && styles.emptyContainer}
        style={styles.list}
      /> */}
      {/* 
          <Image style={{ width: 300, height: 300, resizeMode: "cover" }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              

          /> */}

      {/* <Image
        style={{ width: 300, height: 300, resizeMode: 'cover' }}
        source={require('../assets/images/icon.png')}
      /> */}

      {/* <ImageBackground
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Text style={styles.text}>Hello, World!</Text>
      </ImageBackground> */}

      {/* <Modal
        animationType="slide"
        color="red"
        onRequestClose={() => Alert.close('Alert is closed')}
      /> */}
          
          
      {/* <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView> */}

          {/* <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('Button clicked')} style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}>
            <Text>Click me</Text>
        </TouchableOpacity> */}
          
        {/* <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"
  onPress={() => alert('Pressed!')}>
 <Text>Touch Here</Text>
</TouchableHighlight>; */}
          
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  imageBackground: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden', // Ensures rounded corners affect children
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
})

export default MyComponent
