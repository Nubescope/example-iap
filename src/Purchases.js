import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as apiClient from './api-client'

class Purchases extends Component {
  state = {
    characters: [],
  }

  async componentDidMount() {
    let characters = await apiClient.getCharacters()
    this.setState({ characters: characters.filter(c => c.purchased) })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Purchased products:</Text>
        {!this.state.characters.length && <Text style={styles.empty}>No products purchased</Text>}
        {this.state.characters.map(character => (
          <Text>{character.name}</Text>
        ))}
      </View>
    )
  }
}

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },

  description: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

/**
 * Exports
 */

export default Purchases
