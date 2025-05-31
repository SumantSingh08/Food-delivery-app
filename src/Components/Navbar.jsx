import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import  { dataContext } from '../Context/FoodContext';
import { useSelector } from 'react-redux';

function Navbar() {
    const {input, setInput, foodList, setFoodList, setShowCart, setNullFood} = useContext(dataContext);
    const foodItem = useSelector((state) => state.cart.cartItems);
    const foodInfo = (e) => {
    e.preventDefault();
    const searchTerm = input.trim().toLowerCase();
    const newFood = foodList.filter((item) =>
    item.food_name.toLowerCase().includes(searchTerm)
    );
    if (newFood && newFood.length > 0) {
        setFoodList(newFood);
      
    } else {
        setFoodList('');
    }
    
};

    return (
        <nav className='w-full  h-auto rounded-md  bg-slate-300 fixed top-0 py-5   '>
            <div className='w-full h-10 md:h-12 flex justify-between px-3  md:px-8'>
                <div className='w-[13%] md:w-[6%] lg:w-[3%] text-center items-center bg-white rounded-sm shadow-sm p-3'>
                    <MdFastfood className=' text-pink-500 overflow-hidden items-center md:text-2xl text-xl'/>
                </div>
                <form onSubmit={(e) =>  foodInfo(e)} className='w-[60%]  flex bg-white items-center gap-2  pl-2 md:pl-3  rounded-sm  shadow-sm'>
                    <div>
                        <IoSearch  className='text-pink-500 font-bold '/>
                    </div>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='w-full h-full font-semibold  outline-none' placeholder='search items...' />
                </form>
                <div onClick={() => setShowCart(true)} className='w-[13%] md:w-[6%] lg:w-[3%] flex justify-center bg-white items-center rounded-sm shadow-lg relative cursor-pointer'>
                    <LuShoppingBag  className=' text-pink-500 text-xl md:text-2xl'/>
                    <span className='inline-block absolute top-0 right-1 text-sm md:text-sm font-semibold'>{foodItem && foodItem.length}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
