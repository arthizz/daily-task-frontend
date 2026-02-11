import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTasks } from "@/hooks/taskHooks";

type taskItemProps = {
    id: number;
    title: string;
    description: string;
    is_completed: boolean;
    remove: (id: number) => void;
    completeTask: (id: number) => void;
};

export default function TaskItem({id, title, description, is_completed, remove, completeTask}: taskItemProps){

    return (
        <div className="mx-auto mb-4 flex w-full items-center justify-between rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <div className="text-xl font-medium text-black dark:text-white"><h1>{title}</h1></div>
                <p className="text-gray-500 dark:text-gray-400">{description}</p>
                <small className="text-gray-500 dark:text-gray-400">February 19, 2026</small>
            </div>
            <div className="flex gap-4">
                {is_completed ? (
                    <span className="bg-green-300/10 px-5 rounded-md text-green-500 text-center flex items-center">Completed</span>
                ): (
                    <button type="button" className="py-3 bg-transparent cursor-pointer" onClick={() => completeTask(id)}>
                        <CheckIcon className="w-6 h-6 text-green-500"></CheckIcon>
                    </button>
                )}
                
                <button type="button" className="py-3 bg-transparent cursor-pointer" onClick={() =>remove(id)}>
                    <XMarkIcon className="w-6 h-6 text-red-500"></XMarkIcon>
                </button>
            </div>
        </div>
    );

}