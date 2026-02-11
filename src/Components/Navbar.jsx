import React, { useContext, useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import { dataContext } from '../Context/FoodContext';
import { useSelector } from 'react-redux';

function Navbar() {
  const { input, setInput, foodList, setFoodList, setShowCart, setNullFood, setShowLogin } = useContext(dataContext);
  const foodItem = useSelector((state) => state.cart.cartItems);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="w-full fixed top-0 z-50 bg-[#FFF7ED] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 md:px-8 py-3 flex gap-2 items-center justify-between">

        <div className="hidden md:flex bg-white p-3 rounded-xl shadow-sm">
          <MdFastfood className="text-pink-500 text-2xl" />
        </div>

        <form className="flex flex-1  bg-white rounded-full px-4 py-2  gap-2 border border-gray-200 focus-within:ring-2 focus-within:ring-pink-300 transition">
          <IoSearch className="text-pink-500 text-lg" />
          <input
            type="text"
            placeholder="Search food or restaurant..."
            className="w-full outline-none font-medium text-sm text-gray-700 placeholder-gray-400"
          />
        </form>

        <div className="hidden md:flex items-center gap-4">

          {/* <button
        onClick={() => setShowLogin(true)}
        className="bg-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-600 active:scale-95 transition cursor-pointer"
      >
        Login
      </button> */}

          <div
            onClick={() => setShowCart(true)}
            className="relative bg-white p-3 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition"
          >
            <LuShoppingBag className="text-pink-500 text-xl" />
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 rounded-full">
              {foodItem?.length || 0}
            </span>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-white p-2 rounded-lg border border-gray-200 shadow-sm"
        >
          {menuOpen ? (
            <LuX className="text-xl text-pink-500" />
          ) : (
            <LuMenu className="text-xl text-pink-500" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">

          {/* <button
        onClick={() => {
          setShowLogin(true);
          setMenuOpen(false);
        }}
        className="w-full bg-pink-500 text-white py-2 rounded-xl font-semibold hover:bg-pink-600 transition"
      >
        Login
      </button> */}

          <button
            onClick={() => {
              setShowCart(true);
              setMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            <LuShoppingBag className="text-pink-500 text-xl" />
            Cart ({foodItem?.length || 0})
          </button>

        </div>
      )}
    </nav>

  )
}

export default Navbar
