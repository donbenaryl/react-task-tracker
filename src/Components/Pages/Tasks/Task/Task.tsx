import { FaTimes } from 'react-icons/fa'
import { ITask } from '../../../../Interfaces/ITask'
import { format } from 'date-fns'

interface TaskProps {
    task: ITask,
    onToggle: React.MouseEventHandler<HTMLDivElement>,
    onDelete: React.MouseEventHandler<SVGElement>
}

const Task = ({task, onToggle, onDelete}: TaskProps) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={onToggle} >
            <h3>
                {task.title} 
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={onDelete}  />
            </h3>
            <p>{task.date ? format(new Date(task.date), 'yyyy-MM-dd') : '--'}</p>
        </div>
    )
}

export default Task
