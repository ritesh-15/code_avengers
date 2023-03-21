// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cart: [],
  totalPrice: 0,
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
    },
    getTotalPrice: (state, action) => {
      let totalQuantity = 0
      let tprice = 0
      state.cart.forEach((item) => {
        totalQuantity += item.quantity
        tprice += item.price * item.quantity
      })
      state.totalPrice = tprice
    },
  },
})

export default cartSlice.reducer
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  cart,
  getTotalPrice,
} = cartSlice.actions
