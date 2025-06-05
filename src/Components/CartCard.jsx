import React, {useId} from 'react'
import image1 from '../assets/image1.avif'
import { ImBin } from "react-icons/im";
import { removeCart } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { incrementQty } from '../Redux/CartSlice';
import { decrementQty } from '../Redux/CartSlice';
import { toast } from 'react-toastify';
function CartCard({image, name, quantity, price, id}) {
    const dispatch = useDispatch();
    
    return (
        <div className=' w-full h-18 md:h-24 flex justify-between shadow-lg'>
            <div className='w-[80%] flex gap-3 md:gap-2'>
                <div className='w-[45%] lg:w-[40%] overflow-hidden '>
                    <img className='px-2 w-full h-[80%] mt-3 md:mx-auto rounded-lg object-cover' src={image && image} alt={name && name} />
                </div>
                <div className='w-[55%] lg:w-[60%] flex flex-col gap-1 md:gap-2 mt-2 '>
                    <h2 className='text-sm font-bold  w-full  mt-1 '>{name && name}</h2>
                    <div className=' grid grid-cols-3 w-[60%]  md:w-[50%] lg:w-[35%] rounded-md border-2 border-green-300 overflow-hidden'>
                        <button onClick={() => quantity>1 ?dispatch(decrementQty(id)) : quantity} className='text-center items-center text-md bg-white cursor-pointer'>-</button>
                        <span className=' text-center items-center text-md   bg-gray-200'>{quantity && quantity}</span>
                        <button onClick={() => dispatch(incrementQty(id))} className=' text-center items-center text-md   bg-white cursor-pointer'>+</button>
                    </div>
                </div>
            </div>
            <div className='w-[25%] h-[80%] flex flex-col gap-4 md:gap-5 items-end pr-2 lg:pr-6 mt-2'>
                <span className='font-semibold text-sm lg:text-lg text-pink-400'>Rs {price && price}/-</span>
                <ImBin onClick={()=> {dispatch(removeCart(id)), toast.error("remove dish") }} className='md:text-lg cursor-pointer' />
            </div>
        </div>
    )
}

export default CartCard
