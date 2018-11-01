import { AsyncStorage } from 'react-native'
import { PRODUCTS } from './billing'

export function savePurchase(purchase) {
  return AsyncStorage.setItem(`purchases:${purchase.productId}`, 'PURCHASED')
}

export function syncPurchases(purchases) {
  purchases.forEach(purchase => {
    savePurchase(purchase)
  })
}

export async function isPurchased(productId) {
  const status = await AsyncStorage.getItem(`purchases:${productId}`)
  return status === 'PURCHASED'
}

export async function getCharacters() {
  return [
    {
      id: 'mickey',
      name: 'Mickey Mouse',
      purchased: await isPurchased(PRODUCTS.mickey),
    },
    {
      id: 'pluto',
      name: 'Pluto',
      purchased: await isPurchased(PRODUCTS.pluto),
    },
  ]
}