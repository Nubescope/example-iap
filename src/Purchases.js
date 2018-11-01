import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as apiClient from './api-client'

class Purchases extends Component {
  state = {
    characters: []
  }
  
  async componentDidMount() {
    let characters = await apiClient.getCharacters()
    this.setState({ characters: characters.filter(c => c.purchased) })
  }
  
  render() {
    return (
      <View>
        <Text>Estos son tus personajes:</Text>
        {this.state.characters.map(character => <Text>{character.name}</Text>)}
      </View>
    )
  }
}

export default Purchases