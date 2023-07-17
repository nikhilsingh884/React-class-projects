import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <div className="position-fixed">
                <div className="title"><h2 className='text-center text-light border-bottom border-bottom-1 py-3 '>Assignment</h2></div>
                <div className="p-4 ">
                    <ul className='list-unstyled'>
                        <Link to="/array"><li className='py-2'>Array In List</li></Link>
                        <hr className='my-1' />
                        <Link to="incdec"><li className='py-2'>Increment/Decrement</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
