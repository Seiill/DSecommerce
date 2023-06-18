import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    increaseQuantity: (state, action) => {
        const { id } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity += 1;
        }
      },
         
    clearCart: (state) => {
      state.items = [];
    },
    /* checkout: () => {
      const navigate = useNavigate();

      // lógica adicional relacionada con el proceso de pago

      // Redirige a la página de confirmación de compra
      navigate("/checkout");
    }, */
  },
});

export const { addToCart, removeFromCart, clearCart,  increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;


