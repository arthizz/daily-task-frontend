"use client";
import { useState, useEffect } from "react";
import { addNewTask, removeTask, fetchTasks } from "../lib/task";

export function useTasks(){

    type Tasks = {
        id: number;
        title: string;
        description: string;
        is_completed: boolean;
    };

    const [tasks, setTasks] = useState<Tasks[]>([
        {
            id: 1,
            title: "Test title",
            description: "Test Description",
            is_completed: false,
        },
        {
            id: 2,
            title: "Test title1",
            description: "Test Description1",
            is_completed: false,
        },
        {
            id: 3,
            title: "Test title2",
            description: "Test Description2",
            is_completed: false,
        }
    ]);

    // useEffect(() => {

    //     fetchTasks().then(setTasks);

    // }, []);

    const add = async (task: Omit<Tasks, "id">) => {

        const newTask = await addNewTask(task);

        setTasks(prev => [...prev, newTask]);

    }

    const remove = async(id: number) => {

        // await removeTask(id);

        setTasks(prev => prev.filter(task => task.id != id));

    }

    return {tasks, add, remove};

}