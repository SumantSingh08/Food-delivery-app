import React from 'react'
import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiMeal } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const Cards = [
    {
        icon:<TiThSmallOutline className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"All"
    },
    {
        icon:<MdFreeBreakfast  className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"breakfast"
    },
    {
        icon:<LuSoup  className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"soups"
    },
    {
        icon:<CiBowlNoodles   className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"pasta"
    },
    {
        icon:<GiMeal  className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"main_course"
    },
    {
        icon:<GiFullPizza  className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"pizza"
    },
    {
        icon:<GiHamburger  className='text-pink-400 w-14 h-14 mx-auto'/>,
        name:"burger"
    }
]

export default Cards
