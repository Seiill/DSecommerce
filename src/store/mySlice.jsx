import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {

      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({...action.payload, quantity: action.payload.quantity || 1});
      }
    },
    removeFromCart: (state, action) => {
        const productId = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
          if (state.items[itemIndex].quantity > 1) {
            state.items[itemIndex].quantity -= 1;
          } else {
            state.items.splice(itemIndex, 1);
          }
        }
      
      /* const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId); */
    },
         
    clearCart: (state, action) => {
      const productId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === productId);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
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


