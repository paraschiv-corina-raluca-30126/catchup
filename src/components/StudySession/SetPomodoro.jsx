import React, { useContext, useState } from 'react'
import BtnPomodoro from './BtnPomodoro'
import { SettingContext } from '../../context/SettingsContext'

const SetPomodoro = () => {
    const [newTimer, setNewTimer] = useState({
        work:10,
        short: 5,
        long:15,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
        }
    }
    const handleSubmit = e => {
        updateExecute(newTimer);
        console.log(e,newTimer)
    }
    return (
        <div className='form-container'>
            <form noValidate>
                <div className="input-wrapper">
                    <input className="input" name='work' onChange={handleChange} value={newTimer.work} />
                    <input className="input" name='shortBreak' onChange={handleChange} value={newTimer.short} />
                    <input className="input" name='longBreak' onChange={handleChange} value={newTimer.long } />
                </div>
            </form>
            <BtnPomodoro title={'Set Timer'} _callback={handleSubmit} />

        </div>
    )
}

export default SetPomodoro