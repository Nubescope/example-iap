import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Products from './Products'
import Purchases from './Purchases'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Products />
        <Purchases />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default App