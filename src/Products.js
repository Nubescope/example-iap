import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import * as billing from './billing'
import * as apiClient from './api-client'

class Products extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    await billing.restorePurchases()
    const products = await billing.getProducts()
    this.setState({ products })
  }

  handleProductPress = async product => {
    const purchase = await billing.buyProduct(product.productId)
    if (purchase) {
      apiClient.savePurchase(purchase)
    }
  }

  handleRestorePurchasesPress = () => {
    const purchases = billing.restorePurchases()
    apiClient.syncPurchases(purchases)
  }

  render() {
    return (
      <View>
        <Text>Elige el personaje que quieras comprar:</Text>
        {this.state.products.map(product => {
          return (
            <Button
              title={`${product.title} ${product.localizedPrice}`}
              key={product.productId}
              onPress={() => this.handleProductPress(product)}
            />
          )
        })}
        <Button title="Restaurar compras" onPress={this.handleRestorePurchasesPress} />
      </View>
    )
  }
}

export default Products
