import { FaTimes } from 'react-icons/fa'
import { ITask } from '../../../../Interfaces/ITask'
import DateHelper from '../../../../Helpers/DateHelper'

interface TaskProps {
    task: ITask,
    onToggle: React.MouseEventHandler<HTMLDivElement>,
    onDelete: React.MouseEventHandler<SVGElement>
}

const Task = ({task, onToggle, onDelete}: TaskProps) => {
    const {formatDateYMD} = DateHelper()

    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={onToggle} >
            <h3>
                {task.title} 
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={onDelete}  />
            </h3>
            <p>{formatDateYMD(task.date)}</p>
        </div>
    )
}

export default Task
