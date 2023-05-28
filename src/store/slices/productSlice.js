import { createSlice } from "@reduxjs/toolkit";
import { status } from "../constants";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status:status.IDLE
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload;
        }
    }
})


export const {setProducts} = productSlice.actions;
export default productSlice.reducer;

// Thunks