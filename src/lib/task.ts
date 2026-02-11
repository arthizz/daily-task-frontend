type Task = {
    
    id: number;
    title: string;
    description: string;

}

const fetchTasks = async() => {

    const res = fetch("/api/tasks");
    if((await res).ok) throw new Error("Failed to fetch task");

    return (await res).json();

}

const markTaskCompleted = async(id: number) => {

    const res = fetch("/api/tasks/complete/${id}", {

        method: "PUT",
        headers: {"Content-Type": "application/json"}

    });

    if((await res).ok) throw new Error("Failed to update task");

    return (await res).json();

}

const addNewTask = async(task: Omit<Task, "id">) => {

    const res = fetch("/api/tasks/add-task", {

        method: "POST",
        body: JSON.stringify(task),
        headers: {"Content-Type": "application/json"}

    });

    if(!(await res).ok) throw new Error("Failed to add new task");

    return (await res).json();

}

const removeTask = async(id: number) => {

    const res = fetch("/api/tasks/delete-task/${id}", {
        method: "DELETE"
    });

    if(!(await res).ok){

        return "Failed to remove task";

    }

    return "Remove Task success!";

}

export {removeTask, fetchTasks, addNewTask};