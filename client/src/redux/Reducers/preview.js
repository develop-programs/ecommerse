import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
};

export const Preview = createSlice({
    name: "preview",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        OpenPreview: (state) => {
            state.value = true
        },
        ClosePreview: (state) => {
            state.value = false
        }
    },
});

export const { OpenPreview, ClosePreview } = Preview.actions;
export default Preview.reducer;