import React, { useState } from 'react'

function IncDec() {

    const [number, setNumber] = useState(0)

    return (
        <div className='container py-5'>
            <h1>Ques-2: Create Increment decrement state change by button click?</h1>
            <h1>{number} <span>
            
            <button className='btn btn-primary btn-sm me-2' onClick={() => { setNumber(number + 1) }}>बढ़ाओ</button> 
            <button className='btn btn-danger btn-sm me-2' onClick={() => { setNumber(number - 1) }}>घटाओ</button>
            <button className='btn btn-sm btn-primary' onClick={() => { setNumber(0) }}>Reset</button>

            </span> </h1>
        </div>
    )
}

export default IncDec
