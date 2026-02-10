import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { food_items } from '../food';
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux'
import { addCart } from '../Redux/CartSlice';
import { toast } from 'react-toastify'
function MealCard({ meal }) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">

                <div className="w-full h-44 md:h-48 overflow-hidden">
                    <img
                        src={meal.food_image}
                        alt={meal.food_name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="p-4">

                    <h3 className="text-base md:text-lg font-bold text-gray-800 truncate">
                        {meal.food_name}
                    </h3>

                    <div className="flex justify-between items-center mt-2">
                        <span className="text-sm md:text-base font-semibold text-green-600">
                            ₹ {meal.price}
                        </span>

                        <div className="flex items-center gap-1">
                            {meal.food_type === "veg" ? (
                                <LuLeafyGreen className="text-green-600 text-lg" />
                            ) : (
                                <GiChickenOven className="text-red-500 text-lg" />
                            )}
                            <span className="text-sm font-medium capitalize text-gray-600">
                                {meal.food_type}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            dispatch(addCart({ meal }));
                            toast.success("Added to cart 🛒");
                        }}
                        className="
                        w-full mt-4 py-2
                        bg-pink-500 text-white
                        rounded-lg font-semibold
                        hover:bg-pink-600
                        transition active:scale-95 cursor-pointer"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>

        </>
    )
}

export default MealCard
