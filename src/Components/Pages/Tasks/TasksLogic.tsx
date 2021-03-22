import { useState, useEffect } from 'react';
import { ITask, ITasksState } from '../../../Interfaces/ITask';
import { useSelector, useDispatch } from 'react-redux';
import { AddTask } from '../../../actions'


const TasksLogic = () => {
  const dispatch = useDispatch()
  const taskss = useSelector<ITasksState, ITasksState["tasks"]>((state) => state.tasks)

  const [ tasks, setTasks ] = useState<Array<ITask>>([])
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      // dispatch({type: "ADD_TASK", payload: tasksFromServer})
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(process.env.REACT_APP_BASE_URL+'/tasks')
    const data = await res.json()

    return data
  }
  
  const fetchTask = async (id: number) : Promise<ITask> => {
    const res = await fetch(process.env.REACT_APP_BASE_URL+`/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const addTask = async (task: Partial<ITask>) : Promise<void> => {
    const res =  await fetch(process.env.REACT_APP_BASE_URL+'/tasks',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    dispatch(AddTask(data))
    // setTasks([...tasks, data] )
  }

  const deleteTask = async (id: number) : Promise<void> => {
    await fetch(process.env.REACT_APP_BASE_URL+`/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id ));
  }

  const toggleReminder = async (id: number) : Promise<void> => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(process.env.REACT_APP_BASE_URL+`/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    await setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: data.reminder} : task
      )
    )
  }

  const showTask = () : void => {
    setShowAddTask(!showAddTask);
  }
  
  return {tasks, taskss, fetchTasks, deleteTask, toggleReminder, showAddTask, showTask, addTask }
}

export default TasksLogic