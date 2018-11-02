import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Products from './Products'
import Purchases from './Purchases'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>In-App Purchases Example</Text>
        <Products />
        <Purchases />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
    fontSize: 25,
  },
})

export default App
