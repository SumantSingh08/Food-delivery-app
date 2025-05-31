import React, { createContext, useState } from 'react'
export const dataContext = createContext()
import { food_items } from '../food';
function FoodContext({children}) {
    const [input, setInput] = React.useState("");
    const [foodList, setFoodList] = useState(food_items);
    const [showCart, setShowCart] = useState(false);
    const [nullFood, setNullFood] = useState("");
    const data = {
        input,
        setInput,
        foodList,
        setFoodList,
        showCart,
        setShowCart,
        nullFood,
        setNullFood,
    }
    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}

export default FoodContext
