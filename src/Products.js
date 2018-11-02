import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
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
    const { products } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Choose the product you want to buy</Text>
        <View style={styles.products}>
          {!this.state.products.length && <Text style={styles.empty}>No products found</Text>}
          {this.state.products.map(product => {
            return (
              <Button
                title={`${product.title} ${product.localizedPrice}`}
                key={product.productId}
                onPress={() => this.handleProductPress(product)}
              />
            )
          })}
        </View>
        {/* <Text style={styles.separator}>or...</Text> */}
        <Button title="Restore Purchases" color="#841584" onPress={this.handleRestorePurchasesPress} />
      </View>
    )
  }
}

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: 25,
  },

  description: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },

  products: {
    flex: 1,
    justifyContent: 'center',
  },
})

/**
 * Exports
 */

export default Products
