import React from "react";

export default function addTask(){

    return(

        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
                <div className="container mx-auto p-4">
                    <h1 className="text-center text-4xl">Add Task</h1>
                    <hr className="my-4 border-indigo-500"/>
                    <form action="">
                        <div className="grid grid-cols-1">
                            <div className="mt-4">
                                <label htmlFor="title-name">Task Title</label>
                                <input 
                                    type="text"
                                    name="title-name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="due-date">Task Due Date</label>
                                <input 
                                    type="date"
                                    name="due-date"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="task-description">Task Description</label>
                                <textarea name="task-description" id="task-description" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></textarea>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="cursor-pointer hover:bg-indigo-300 block w-full rounded-md bg-indigo-500 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>

    );

}