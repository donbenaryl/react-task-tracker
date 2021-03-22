import { ITasksState } from './Interfaces/ITask'
import { AddTaskAction } from './actions'

const initialState = {
    tasks: []
}

export const tasksReducer = (state: ITasksState = initialState, action: AddTaskAction) => {
    switch(action.type){
        case "ADD_TASK": {
            return {...state, tasks: [...state.tasks, action.payload]}
        }
        default:
            return state
    }
}