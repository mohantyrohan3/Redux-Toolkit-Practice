import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            let id;
            for(let i=0;i<state.length;i++){
                if(state[i].id === action.payload){
                    id = i;
                    break;
                }
            }
            return state.splice(id,1);
        },
    }
});


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;