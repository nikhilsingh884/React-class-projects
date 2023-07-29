import React from 'react'

function FetchJS() {

function fetchApi(){
    
    const response = fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
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
