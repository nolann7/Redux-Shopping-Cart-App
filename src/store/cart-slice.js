import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], totalQuantity: 0, totalAmount:0, setShowCart: false };
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;

      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalAmount += existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalAmount += newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;

    },
    showCart(state) {
      state.setShowCart = !state.setShowCart
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

