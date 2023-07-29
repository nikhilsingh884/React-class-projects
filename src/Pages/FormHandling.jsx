import React, { useState } from 'react'

function FormHandling() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [tableData, setTableData] = useState([]);

    const formValue={
        name: name,
        email: email,
        city: city
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTableData([...tableData, formValue])
        setName("");
        setEmail("");
        setCity("");
    }

    function handleDelete(item){
        const updatedData= tableData.filter((singleItem)=>singleItem.index !== item.index );
        tableData=updatedData;
    }


    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6 offset-3 p-4 shadow bg-light mb-5">
                    <h1 className='text-center mb-2'>Add User</h1>
                    <form action="">
                        {name && <h6>Welcome {name}</h6>}

                        <input className='w-100 form-control mb-3' type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Fullname' />
                        <input className='w-100 form-control mb-3' type="text" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter Email' />
                        <input className='w-100 form-control mb-3' type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter City' />

                        <button className='btn btn-sm btn-primary w-100' onClick={handleSubmit}>Add</button>
                    </form>


                </div>
            </div>
            <div className='col-md-6 offset-3 shadow px-3'>

                <table className='table table-hover mt-5'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        tableData.map((item, index) => {
                            const { name, email, city } = item;
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{city}</td>
                                        <td>
                                            <button className='btn btn-sm btn-danger me-1' onClick={()=>handleDelete()}>Delete</button>
                                            <button className='btn btn-sm btn-primary'>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>

            </div>
            <hr />
        </div>
    )
}

export default FormHandling
