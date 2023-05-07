import React, { useState } from 'react'
import TimerInput from './TimerInput'

function CountDownTimer() {
    const [currentTime, setCurrentTime] = useState(0)
    const [intervalID, setIntervalID] = useState(null)

    const startNewTimer = () => {
        setIntervalID(setInterval(() => {
            setCurrentTime(currentTime => {
                if (currentTime > 0) {
                    return currentTime - 1
                }
                destroyExistingTimer()
                return currentTime
            })
        }, 1000))
    }
    const destroyExistingTimer = () => {
        if (intervalID) {
            clearInterval(intervalID)
            setIntervalID(null)
        }
    }

    const startTimer = (timeInSeconds) => {
        // setInterval and other logic
        console.log(timeInSeconds)
        destroyExistingTimer()
        setCurrentTime(timeInSeconds)
        startNewTimer()
    }
    return <>
        <div id='count-down-app'>
            <TimerInput onRequestTimerStart={startTimer} />
            <div id='current-time'>
                {currentTime}
            </div>
        </div>
    </>
}

export default CountDownTimer