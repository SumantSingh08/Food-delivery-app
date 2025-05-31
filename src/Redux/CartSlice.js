import {createSlice} from '@reduxjs/toolkit'
import { LuGoal } from 'react-icons/lu';


const initialState = {
    cartItems: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) =>{
            const existItem = state.cartItems.find((item) => (item.meal.id === action.payload.meal.id))
            if (existItem) {
                state.cartItems = state.cartItems.map((item) =>(item.meal.id === existItem.meal.id ? {...item, meal:{ ...item.meal,  food_quantity: item.meal.food_quantity + 1}} : item) )
            } else
            state.cartItems.push(action.payload)
            console.log("payload data", action.payload);
            
        },
        removeCart: (state, action) =>{
            state.cartItems =  state.cartItems.filter(( item)=>item.meal.id !== action.payload);
            
            
        },
        incrementQty: (state, action) => {
                state.cartItems = state.cartItems.map((item) => item.meal.id === action.payload ? {...item, meal:{
                  ...item.meal, food_quantity: item.meal.food_quantity + 1}} : item)
                
        },
        decrementQty: (state, action) => {
                state.cartItems = state.cartItems.map((item) => item.meal.id === action.payload ? {...item, meal:{
                  ...item.meal, food_quantity: item.meal.food_quantity - 1}} : item)
                
        }
        
    }
});

export const {addCart, removeCart, incrementQty, decrementQty} = cartSlice.actions;
export default cartSlice.reducer;