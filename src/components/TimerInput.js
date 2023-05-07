import React from 'react'

function TimerInput({onRequestTimerStart}) {
    // const [timeInput, setTimeInput] = useState(300)
    return <>
        <label htmlFor='time-count'>Enter Time in Seconds</label>
        <input
            type='number'
            placeholder='180'
            id='time-count'
            onKeyDown={(e) => {
                if(e.keyCode === 13 || e.which === 13)        // keycode of enterkey = 13
                    // notify parent to start the timer
                    onRequestTimerStart && onRequestTimerStart(Math.floor(e.target.value))
                    // checking fn.exist && getting value
                    // onReqestTiumerStart is just a functional prop 
            }}  
        />
    </>
}

export default TimerInput