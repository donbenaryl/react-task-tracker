export interface ITask {
    id: number,
    title: string,
    date: Date | null,
    reminder: boolean
}

export interface ITasksState {
    tasks: ITask[]
}