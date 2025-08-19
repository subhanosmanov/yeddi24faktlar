import { createSlice } from "@reduxjs/toolkit";

// localStorage-dən oxu
const savedFromStorage = JSON.parse(localStorage.getItem("savedItems")) || [];

const initialState = {
    items: savedFromStorage, // saxlanılan elementlər
};

const savedSlice = createSlice({
    name: "saved",
    initialState,
    reducers: {
        addItem: (state, action) => {
            // Eyni element artıq varsa təkrar əlavə etməsin;
            const exists = state.items.some((item) => item.id === action.payload.id);
            if (!exists) {
                state.items = [...state.items, action.payload];
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
            // Dəyişən state-i localStorage-a yaz
            localStorage.setItem("savedItems", JSON.stringify(state.items));
        },
        clearAll: (state) => {
            state.items = [];
            localStorage.setItem("savedItems", JSON.stringify([]));
        },
    },
});

export const { addItem, removeItem, clearAll } = savedSlice.actions;
export default savedSlice.reducer;