import TasksLogic from './TasksLogic';
import Task from './Task/Task';
import AddTask from './Task/AddTask';
import Button from '@material-ui/core/Button';

const Tasks = () => {
    const {tasks, deleteTask, toggleReminder, showAddTask, showTask, addTask} = TasksLogic();

    return (
        <div className="task-list">
            <Button type="button" role="button" variant="contained" color={showAddTask ? 'secondary' : 'primary'} onClick={showTask} >
            {showAddTask ? 'Close' : 'Add'}
            </Button>
            {showAddTask &&
                <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? 
                tasks.map((task) => (
                    <Task key={task.id} task={task} onToggle={async () => toggleReminder(task.id)} onDelete={async () => deleteTask(task.id)} />
                ))
            : 
                <p>No task to show.</p>
            }  
        </div>
    )
}

export default Tasks
