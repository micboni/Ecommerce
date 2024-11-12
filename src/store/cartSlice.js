import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.description; // Aggiorna il totale
    },
    deleteFromCard: (state, action) => {
      // Trova l'indice dell'elemento da rimuovere
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        // Se l'elemento esiste, rimuovilo dall'array items
        state.total -= state.items[itemIndex].description; // Aggiorna il totale
        state.items.splice(itemIndex, 1); // Rimuove l'elemento specifico
      }
    },
  },
});

export const { addToCart, deleteFromCard } = cartSlice.actions;
export default cartSlice.reducer;
