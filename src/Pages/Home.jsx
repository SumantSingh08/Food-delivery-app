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
function Home() {
    const { foodList, setFoodList, input, setInput, showCart, setShowCart, nullFood, setNullFood } = useContext(dataContext);

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
        <div className='w-full min-h-screen bg-slate-300 '>
            
            <div className='w-full '>
                <Navbar />
            </div>
            <div className='flex flex-wrap gap-4 justify-center items-center mx-auto pt-32 px-3 '>
                {Cards.map((card) => (
                    <div onClick={() => categories(card.name)} key={card.name} className='flex flex-col text-center items-center bg-white  w-24 h-24 md:w-28 md:h-28 md:py-1  rounded-md hover:bg-pink-100 cursor-pointer  shadow-lg duration-300'>
                        <div className='pt-1 items-center'>
                            {card.icon}
                        </div>
                        <div className='font-bold text-md md:text-lg items-center '>
                            {card.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex flex-wrap mx-auto justify-center mt-14 items-center md:max-w-7xl gap-7 pb-6 md:pb-8'>
                {foodList ? foodList.map((item) => (
                    <div key={item.id} className=' px-2 py-2 bg-white  rounded-md shadow-lg w-64 h-auto '>
                        <MealCard meal={item} />
                    </div>
                )) : <div className='text-black text-2xl font-semibold text-center'>{nullFood}</div>}
            </div>
            <div className={`w-full md:w-[40%]  h-screen bg-white p-2 md:p-4 fixed top-0 right-0 overflow-y-auto shadow-xl transition-all duration-600 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex justify-between items-center w-full'>
                    <span className='text-md md:text-2xl font-semibold text-pink-500'>order items</span>
                    <RxCross2 onClick={() => setShowCart(false)} className='text-2xl font-semibold text-pink-500 hover:text-gray-400 cursor-pointer' />
                </div>
                <div className='w-full flex flex-col gap-4 md:gap-6 my-6'>
                    {item && item.length > 0 ? item.map((item) => (
                        <div key={item.meal.id}>
                            <CartCard image={item.meal.food_image} name={item.meal.food_name} quantity={item.meal.food_quantity} price={item.meal.price} id={item.meal.id} />
                        </div>
                    )) : <div className=' text-md md:text-2xl font-semibold text-center text-black pt-4'>No items in cart</div>}
                </div>
                {item && item.length > 0 && 
                <div className='w-full p-4 md:p-6 flex flex-col text-center gap-4'>
                    <div className='w-full  flex flex-col text-center  gap-2 border-t-2 border-b-2 border-gray-400 py-3 '>
                        <div className='flex justify-between'>
                            <h3 className='text-sm font-semibold '>Subtotal</h3>
                            <span className='text-sm font-semibold text-pink-400'>Rs {subTotal && subTotal}/-</span>
                        </div>
                        <div className='flex justify-between'>
                            <h3 className='text-sm font-semibold '>Delivery Fee</h3>
                            <span className='text-sm font-semibold text-pink-400'>Rs {delivery && delivery}/-</span>
                        </div>
                        <div className='flex justify-between'>
                            <h3 className='text-sm font-semibold '>Taxes</h3>
                            <span className='text-sm font-semibold text-pink-400'>Rs {taxes && taxes}/-</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-center items-cente '>
                        <h3 className='text-md font-semibold '>Total</h3>
                        <span className='text-sm md:text-md lg:text-lg font-semibold text-pink-400'>Rs {total && total}/-</span>
                    </div>
                    <div className='w-full  '>
                        <button
                        onClick={() => toast.success("Order Placed Successfully!")}
                            className='text-md font-semibold text-white bg-pink-400 w-full rounded-sm mt-4  transition-all cursor-pointer hover:bg-pink-500'>
                            Placed Order
                        </button>
                    </div>
                </div>
                }

            </div>

        </div>
    )
}

export default Home
