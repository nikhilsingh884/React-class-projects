import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

function MainContent() {
    return (
        <div>
            <div className="row main-content">
                <div className="col-md-2 bg-dark text-light pe-0"><Sidebar /></div>
                <div className="col-md-10 px-0"><Content /></div>
            </div>
        </div>
    )
}

export default MainContent
