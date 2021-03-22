import { useState, ChangeEvent } from 'react'
import { ITask } from '../../../../Interfaces/ITask'
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

interface FuncProps {
    onAdd({title, date, reminder} : Partial<ITask>): void
}

const AddTask: React.FC<FuncProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<Date | null>(new Date());
    const [reminder, setReminder] = useState<boolean>(false)

    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const updateDate = (date: Date | null) => {
        setDate(date);
      };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!title){
            alert('Please add a task')
            return
        }

        onAdd({title, date, reminder})
        
        setTitle('');
        setDate(new Date());
        setReminder(false);
    } 

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <TextField 
                label="Title"
                type="text"
                value={title}
                fullWidth
                onChange={updateTitle}
                />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    format="yyyy-MM-dd"
                    margin="normal"
                    label="Date"
                    id="date-picker-dialog"
                    value={date}
                    onChange={updateDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
            <div>
            <FormControlLabel
                control={
                <Checkbox
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    color="primary"
                />
                }
                label="Set Reminder"
            />
            </div>

            <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Task
            </Button>
        </form>
    )
}

export default AddTask
