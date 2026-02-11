"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTasks } from "@/hooks/taskHooks";
import TaskItem from "./components/taskItem";

export default function TaskList(){

    const { tasks, remove } = useTasks();

    return (

        <div className="flex min-h-screen items-center justify-center bg-zing-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
                <div className="container mx-auto p-4">
                    <h1 className="text-center text-4xl mb-4">Your Daily Tasks</h1>
                    <hr />
                    <div className="container py-5">
                        {tasks.map(task => (
                            <TaskItem 
                                key={task.id} 
                                id={task.id} 
                                title={task.title} 
                                description={task.description} 
                                is_completed={task.is_completed} 
                                remove={remove} 
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>

    );

}