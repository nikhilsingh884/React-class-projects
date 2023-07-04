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
        <div className="">
            <h1>React JS assignment: Module-3</h1>
            <h3>Ques-1: How to Create a List View in React Js? </h3>
            <div>
                {arrayData.map((item, id) => {
                    const { name, dept, age } = item;
                    console.log(item.name)
                    return (
                        <div className='card shadow p-4 mb-3'>
                            <h1 key={id}>Name: {name}</h1>
                            <h4>Department: {dept}</h4>
                            <h4>Age: {age}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArrayList
