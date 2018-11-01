import * as RNIap from 'react-native-iap'

export const PRODUCTS = {
  mickey: 'io.underscope.example.iap.product.mickey3',
  pluto: 'io.underscope.example.iap.product.pluto',
}

export async function getProducts() {
  const productIds = Object.values(PRODUCTS)

  let products
  try {
    await RNIap.initConnection()
    products = await RNIap.getProducts(productIds)
  } catch (err) {
    alert(err.message)
  }

  RNIap.endConnection()

  return products
}

export async function buyProduct(productId) {
  let purchase

  try {
    await RNIap.initConnection()
    purchase = await RNIap.buyProduct(productId)
    console.warn(purchase)
  } catch (err) {
    alert(err.message)
  }

  RNIap.endConnection()

  return purchase
}

export async function restorePurchases() {
  let purchases
  try {
    await RNIap.initConnection()
    purchases = await RNIap.getAvailablePurchases()
  } catch (err) {
    alert(err.message)
  }
  RNIap.endConnection()
  return purchases
}
