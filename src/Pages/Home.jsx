import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import { food_items } from '../food'
import MealCard from '../Components/mealCard'
import { dataContext } from '../Context/FoodContext'
import { RxCross2 } from "react-icons/rx";
import CartCard from '../Components/CartCard'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Login from './Login'
function Home() {
    const { foodList, setFoodList, input, setInput, showCart, setShowCart, nullFood, setNullFood, showLogin } = useContext(dataContext);

    const item = useSelector((state) => state.cart.cartItems);
    const subTotal = item.reduce((total, item) => total + item.meal.price * item.meal.food_quantity, 0);
    const delivery = 20;
    const taxes = subTotal * 0.5 / 100;
    const total = Math.floor(subTotal + delivery + taxes);

    const foodempty = nullFood;
    console.log("food empty", foodempty);




    useEffect(() => {
        const data = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
        if (data && data.length > 0) {
            setFoodList(data);

        } else {
            setFoodList('');
            setNullFood("No items found!");
        }
    }, [input]);
    const categories = (cateName) => {
        if (cateName === "All") {
            setFoodList(food_items);
        } else {
            const item = food_items.filter((item) => (item.food_category === cateName))
            setFoodList(item);
        }
    }
    return (
        <div className='w-full min-h-screen  bg-[#FFF7ED] '>

            <div className='w-full '>
                <Navbar />
            </div>


            <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4 justify-center items-center mx-auto pt-28 px-4 max-w-5xl">
                {Cards.map((card) => (
                    <div
                        key={card.name}
                        onClick={() => categories(card.name)}
                        className="
                        flex flex-col items-center justify-center
                      bg-white w-22 h-22 md:w-28 md:h-28
                        rounded-xl shadow-sm
                      hover:bg-pink-50 hover:shadow-md
                        transition cursor-pointer "
                    >
                        <div className="text-2xl text-pink-500">
                            {card.icon}
                        </div>
                        <span className="mt-1 text-sm md:text-base font-semibold text-gray-700">
                            {card.name}
                        </span>
                    </div>
                ))}
            </div>

            {showLogin === true ? <Login /> : ""}
            <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 place-items-center px-2 gap-6 md:gap-4 mt-14  pb-10 md:max-w-7xl mx-auto">
                {foodList && foodList.length > 0 ? (
                    foodList.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition w-[285px]"
                        >
                            <MealCard meal={item} />
                        </div>
                    ))
                ) : (
                    <div className="text-xl font-semibold text-gray-600 text-center">
                        {nullFood}
                    </div>
                )}
            </div>
            <div className={`fixed top-0 right-0 z-50 pb-10 md:pb-0 w-full md:w-[38%] h-screen bg-white shadow-2xl transition-transform duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center border-b px-4 py-4">
                    <h2 className="text-lg md:text-2xl font-semibold text-pink-500">
                        Your Cart
                    </h2>
                    <RxCross2
                        onClick={() => setShowCart(false)}
                        className="text-2xl text-pink-500 hover:text-gray-400 cursor-pointer"
                    />
                </div>

                <div className="flex flex-col gap-4 px-4 py-6 overflow-y-auto h-[60%]">
                    {item && item.length > 0 ? (
                        item.map((item) => (
                            <CartCard
                                key={item.meal.id}
                                image={item.meal.food_image}
                                name={item.meal.food_name}
                                quantity={item.meal.food_quantity}
                                price={item.meal.price}
                                id={item.meal.id}
                            />
                        ))
                    ) : (
                        <div className="text-center text-lg font-semibold text-gray-500">
                            No items in cart
                        </div>
                    )}
                </div>

                {item && item.length > 0 && (
                    <div className="px-4 py-4 border-t bg-gray-50 ">

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="text-pink-500 font-semibold">₹ {subTotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span className="text-pink-500 font-semibold">₹ {delivery}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes</span>
                                <span className="text-pink-500 font-semibold">₹ {taxes}</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4 text-lg font-bold">
                            <span>Total</span>
                            <span className="text-pink-600">₹ {total}</span>
                        </div>

                        <button
                            onClick={() => toast.success("Order Placed Successfully!")}
                            className="w-full mt-5 bg-pink-500 text-white py-2 rounded-xl font-semibold hover:bg-pink-600 transition cursor-pointer "
                        >
                            Place Order
                        </button>
                    </div>
                )}


            </div>

        </div>
    )
}

export default Home
