import React, { useContext, useEffect } from 'react'
import BtnPomodoro from './BtnPomodoro'
import SetPomodoro from './SetPomodoro'
import CountdownAnimation from './CountdownAnimation'
import { SettingContext } from '../../context/SettingsContext'
import { SchoolOutlined } from '@mui/icons-material'
const StudySession = () => {
  const {stopTimer, updateExecute,pomodoro,executing,startAnimate,startTimer, pauseTimer, SettingBtn,setCurrentTimer, setTimerTime,children } = useContext(SettingContext)
  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])
  const work = 'Work';
  return (
    <div className="container">
    {pomodoro !== 0 ?
    <>
      <ul className="labels">
        <li>
          <BtnPomodoro 
            title={'Work' }
            activeClass={executing.active === 'work' ? 'active-label' : undefined} 
            _callback={() => setCurrentTimer('work')} 
          />
        </li>
        <li>
          <BtnPomodoro 
            title="Short Break" 
            activeClass={executing.active === 'short' ? 'active-label' : undefined} 
            _callback={() => setCurrentTimer('short')} 
          />
        </li>
        <li>
          <BtnPomodoro 
            title="Long Break" 
            activeClass={executing.active === 'long' ? 'active-label' : undefined} 
            _callback={() => setCurrentTimer('long')} 
          />
        </li>
      </ul>
      <BtnPomodoro title="Settings" _callback={SettingBtn} />
      <div className="timer-container">
        <div className="time-wrapper">
            <CountdownAnimation
              key={pomodoro} 
              timer={pomodoro} 
              animate={startAnimate}
            >
              {children}
            </CountdownAnimation>
        </div>
      </div>
      <div className="button-wrapper">
        <BtnPomodoro title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
        <BtnPomodoro title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
      </div>
    </> : <SetPomodoro />}
  </div>
  )
}

export default StudySession