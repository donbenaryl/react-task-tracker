import { ITask } from './Interfaces/ITask'

export type AddTaskAction = { type: "ADD_TASK", payload: ITask}
export type FetchTasksAction = { type: "ADD_TASK", payload: ITask}

export const AddTask = (task: ITask):AddTaskAction => ({
    type: "ADD_TASK", 
    payload: task
})

// export const FetchTasks = (tasks: ITask[]):FetchTasksAction => ({
//     type: "ADD_TASK", 
//     payload: tasks
// })