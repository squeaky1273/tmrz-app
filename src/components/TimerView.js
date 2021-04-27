import React, {  } from 'react'
import { useDispatch } from 'react-redux'
// Import our toggleTimer action
import { toggleTimer } from '../actions'
import { formatTime } from '../utils';
import './TimerView.css'
import ResetTimerButton from './ResetTimerButton'

export default function TimerView(props) {
  // Extract these specific props to use in the component
  const { index, timer } = props
  const dispatch = useDispatch()
  const buttonClass = timer.isRunning ? "stop" : "start";

  return (
    <div className="TimerView">
      <h2>{timer.name}</h2>
      {/* <h3>{timer.description}</h3> */}
      <h1>{formatTime(timer.time)}</h1>
      <button className={`timer-view__button timer-view__button--${buttonClass}`}
        onClick={() => dispatch(toggleTimer(index))}
      >
        {timer.isRunning ? "Stop" : "Start"}
      </button>
      <ResetTimerButton />
    </div>
  )
}