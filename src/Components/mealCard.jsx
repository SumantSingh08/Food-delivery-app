import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { food_items } from '../food';
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from 'react-redux'
import { addCart } from '../Redux/CartSlice';
function MealCard({meal}) {
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <img className='w-full h-46 mx-auto rounded-md' src={meal.food_image} alt={meal.food_name} />
            </div>
            <h3 className='text-lg font-bold mt-1'>
                {meal.food_name}
            </h3>
            <div className='flex justify-between mt-2'>
                <h3 className=' text-sm md:text-md font-semibold text-green-500 '>
                    Rs {meal.price}/-
                </h3>
                <div className='flex gap-2 items-center'>
                    {meal.food_type === "veg" ? <LuLeafyGreen  className='text-green-500'/> : <GiChickenOven className='text-green-500'/>}
                    <p className='text-sm md:text-md font-semibold text-green-500'>
                        {meal.food_type}
                    </p>
                </div>
            </div>
            <button onClick={() => dispatch(addCart({meal}))} className='text-md md:text-lg font-semibold text-white bg-pink-400 w-full rounded-sm mt-3 mb-1 transition-all cursor-pointer hover:bg-pink-500'>Add to dish</button>
       </>
    )
}

export default MealCard
