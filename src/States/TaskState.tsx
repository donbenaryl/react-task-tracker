import { useState } from 'react';
import { ITask } from '../Interfaces/ITask';

const TaskState = () => {
    const [ tasks, setTasks ] = useState<Array<ITask>>([])

    const updateTasks = (task: Array<ITask>) => {
        setTasks(task)
    }

    return {tasks, updateTasks}
}

export default TaskState