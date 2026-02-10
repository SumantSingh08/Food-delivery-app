import React from 'react'
import Input from '../Components/Input'
import { useForm, } from 'react-hook-form'
import Button from '../Components/Button'
import { RxCross2 } from "react-icons/rx";
import { useContext } from 'react';
import { dataContext } from '../Context/FoodContext';
import {useNavigate} from "react-router-dom"
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [currState, setCurrentState] = React.useState("Signup");
    const { setShowLogin } = useContext(dataContext)
    const navigate = useNavigate();
    const submit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    navigate("/")
};
    return (
        <div className='max-w-6xl  h-auto mx-4 rounded-lg  place-self-center  bg-white fixed inset-0 z-50'>
            <form onSubmit={handleSubmit(submit)} className=' place-self-center p-6'>
                <div className='flex justify-between mb-3'>
                    <h2 className='text-lg font-bold '>{currState}</h2>
                    <RxCross2 onClick={() => setShowLogin(false)} className='text-2xl font-semibold text-pink-500 hover:text-pink-600 cursor-pointer' />
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        {currState === "Signup" && (
                            <>
                                <Input
                                    label="Name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-400 overline-none rounded-md px-2 py-1 text-sm "
                                    register={register("name", { required: "name is required" })}
                                />
                                {errors.name && (
                                    <p className='text-red-500'>{errors.name.message}</p>
                                )}
                            </>
                        )}


                    </div>

                    <div>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border  border-gray-400 overline-none rounded-md px-2 py-1 text-sm "
                            register={register("email", { required: "email is reqired" })}

                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-400 overline-none rounded-md px-2 py-1 text-sm  "
                            register={register("password", { required: "password required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <input type='checkbox' className='cursor-pointer' required />
                            <p className='text-xs md:text-sm'>By continuing, i agree to the Term of Use & privacy policy</p>
                        </div>
                    </div>

                    <Button className="w-full py-1 border bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 cursor-pointer items-center">
                        {currState === "Signup" ? "Create Account" : "Login"}
                    </Button>

                    <div className='text-center items-center'>
                        {currState === "Signup" ? <p className='text-sm md:text-[16px]'>Already have a account?<span className='text-pink-500 text-sm md:text-[16px] cursor-pointer' onClick={() => setCurrentState("Login")}>Login here</span></p> : <p className='text-sm md:text-[16px]'>Create a new account?<span className='text-pink-500 text-sm md:text-[16px] cursor-pointer' onClick={() => setCurrentState("Signup")}>click here</span></p>}
                    </div>


                </div>

            </form>
        </div>
    )
}

export default Login
