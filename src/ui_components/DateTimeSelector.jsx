import { Link } from "react-router-dom"
import React from 'react'

export function DateTimeSelector() {

    const [className, setClassName] = React.useState('disabled-link')

    const next = <Link to="/dishes_selection" className={className}>
    <button className="nav-button" onClick={checkValue}>
        Next
    </button>
    </Link>

    function checkValue() {
        const date = document.getElementById("date_input").value
        const time = document.getElementById("time_input").value

        if(!date || !time) {
            //alert('Date or time not specified!')
        } else {
            setClassName('')
        }
    }

    return <form action="post"> 
        <p>
            <label htmlFor="date_input">Date: </label>
            <input id="date_input" type="date" onInput={checkValue} />
        </p>

        <p>
            <label htmlFor="time_input">Time: </label>
            <input id="time_input" type="time" onInput={
                checkValue
            }/>
        </p>

        <Link to="/table_selection" >
                <button className="nav-button">
                    Back
                </button>
            </Link>
            {next}
    </form>
}