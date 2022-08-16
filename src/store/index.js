import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    counter: 0,
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.counter = state.counter + action.payload.counter;

      // !burada <ProductForm>'dan dispatch edilen bilgileri kullanarak işlemler  yapıyoruz.
      const { id, name, price } = action.payload;

      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      console.log(existingProduct);

      if (!existingProduct) {
        // push new product
        state.products.push({
          id: id,
          name: name,
          price: price,
          totalPrice: price * action.payload.amount,
          quantity: 0 + action.payload.amount,
        });
      } else {
        if (action.payload.amount) {
          existingProduct.quantity =
            existingProduct.quantity + action.payload.amount;
          existingProduct.totalPrice =
            existingProduct.totalPrice + price * action.payload.amount;
        } else {
          existingProduct.quantity++;
          existingProduct.totalPrice = existingProduct.totalPrice + price;
        }
      }

      // calc total amount
      state.totalAmount = state.products
        .map((product) => product.totalPrice)
        .reduce((acc, totalPriceProducts) => acc + totalPriceProducts, 0);
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
