import React from 'react'

function FetchJS() {

function fetchApi(){
    
    const response = fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => console.log('data:', data))
        return response.data
}


    return (
        <div className='container py-4'>
            This is fetchApi using js. <br />
            <button onClick={fetchApi}>Fetch in console</button>
            <hr />
        </div>
    )
    
}

export default FetchJS
