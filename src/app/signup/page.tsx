import React from "react";

export default function signup(){

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
                <div className="container mx-auto p-4">
                    <h1 className="text-center text-4xl">Register Account</h1>
                    <hr className="my-4 border-indigo-500"/>
                    <form action="">
                        <h1>Personal Details</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="mt-4">
                                <label htmlFor="first-name">First name</label>
                                <input 
                                    type="text"
                                    name="first-name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="last-name">Last name</label>
                                <input 
                                    type="text"
                                    name="last-name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="age">Age</label>
                                <input 
                                    type="number"
                                    name="age"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="gender">Gender</label>
                                <select 
                                    name="gender" 
                                    id="gender"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                >   
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="mt-4">
                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                        <h1 className="my-4">Account Details</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="mt-4">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    name="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    name="username"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input 
                                    type="password"
                                    name="confirm-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );

}