import React from 'react'

function ArrayList() {

    const arrayData = [{
        id: 1,
        name: "Nikhil",
        dept: "Backend",
        age: 26
    }, {
        id: 2,
        name: "Tahid",
        dept: "Frontend",
        age: 23
    }, {
        id: 3,
        name: "Darshit",
        dept: "Frontend",
        age: 27
    }, {
        id: 4,
        name: "Akash",
        dept: "Backend",
        age: 27
    }, {
        id: 5,
        name: "Jayashree",
        dept: "Backend",
        age: 25
    }
    ]
    return (
        <div className="container p-4">
        <div>
            {arrayData.map((item, id)=>{
                const { name, dept,age}=item;
                console.log(item.name)
                return (
                    <div className='card shadow p-4 mb-3'>
                        <h1 key={id}>{name}</h1>
                        <h4>{dept}</h4>
                        <h4>{age}</h4>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default ArrayList
