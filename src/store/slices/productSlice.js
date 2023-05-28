import { createSlice } from "@reduxjs/toolkit";
import { status } from "../constants";
import axios from "axios";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status:status.IDLE
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})


export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks

export function fetchData() {
    return async function fetchDataThunk(dispatch,getState) {

        try{
            dispatch(setStatus(status.LOADING));
            const response= (await axios.get('https://fakestoreapi.com/products')).data;
            dispatch(setProducts(response));
            dispatch(setStatus(status.IDLE));
        }
        catch(err){
            console.log(err);
            dispatch(setStatus(status.ERROR));
        }
    }
}





