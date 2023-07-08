import React, { useContext } from 'react'
import { AppDetails } from '../App';
import { Link } from 'react-router-dom';


function Cart() {
    const { cart } = useContext(AppDetails)


    console.log(cart);

    if (cart.length === 0) {
        return (

            <div className='container mt-5 pt-5 text-center'>
                <h1 className=''>Cart is empty</h1>
                <Link to='/cocktail'>Click here to shop..</Link>
            </div>
        )
    }
    return (
        <div className='  mt-5 p-5'>

            <table className='table table-hover w-100 border border-1'>
                <thead className='' >
                    <tr style={{ backgroundColor: "#570db1" }} className="text-center text-light" >
                        <th>Sr. no.</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Descrption</th>
                        <th >Qty.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => {
                            const { strDrink, strDrinkThumb, strInstructions } = item;
                            return (
                                <>

                                    <tr className="text-center align-text-bottom ">
                                        <td>{index + 1}</td>
                                        <td>
                                            <img
                                                src={strDrinkThumb}
                                                alt=""
                                                className="img-fluid"
                                                style={{ height: "50px", width: "50px", borderRadius: "5px" }}
                                            />
                                        </td>
                                        <td>{strDrink}</td>
                                        <td>500</td>
                                        <td className="text-truncate" style={{ maxWidth: "0px" }}>
                                            {strInstructions}
                                        </td>
                                        <td ><div className="input"> <input style={{ width: "" }} className='' type="number" /></div></td>
                                        <td><button className='btn btn-sm btn-danger'>Delete</button></td>
                                    </tr>

                                </>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart
