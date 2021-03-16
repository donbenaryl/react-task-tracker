import { useState } from 'react'
import { ITask } from '../../../Interfaces/ITask'
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface FuncProps {
    onAdd({title, date, reminder} : Partial<ITask>): void
}

const AddTask: React.FC<FuncProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [reminder, setReminder] = useState<boolean>(false)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!title){
            alert('Please add a task')
            return
        }

        onAdd({title, date, reminder})
        
        setTitle('');
        setDate('');
        setReminder(false);
    } 

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <form className='add-form' onSubmit={onSubmit}>
                    <TextField 
                        label="Title"
                        type="text"
                        value={title}
                        fullWidth
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    <TextField 
                        label="Date"
                        type="text"
                        value={date}
                        fullWidth
                        onChange={(e) => setDate(e.target.value)}
                        />
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

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save Task
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default AddTask
