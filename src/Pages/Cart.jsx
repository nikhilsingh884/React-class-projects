import React, { useContext } from 'react';
import { AppDetails } from '../App';
import { Link } from 'react-router-dom';

function Cart() {
    const { drinksCart, setDrinksCart } = useContext(AppDetails);
    const { mobilesCart, setMobilesCart } = useContext(AppDetails);
    const { productCart, setProductCart } = useContext(AppDetails);

    const cartLength = (drinksCart.length + mobilesCart.length + productCart.length)



    const deleteDrinksItem = (index) => {
        const updatedDrinksCart = [...drinksCart];
        updatedDrinksCart.splice(index, 1);
        setDrinksCart(updatedDrinksCart);
    };

    const deleteMobilesItem = (index) => {
        const updatedMobilesCart = [...mobilesCart];
        updatedMobilesCart.splice(index, 1);
        setMobilesCart(updatedMobilesCart);
    };

    const deleteProductItem = (index) => {
        const updatedProductCart = [...productCart];
        updatedProductCart.splice(index, 1);
        setProductCart(updatedProductCart);
    };


    // ==========================calculate total===============================


    const calculateDrinksTotal = () => {
        let total = 0;
        drinksCart.forEach((item) => {
            const price = parseFloat(item.price);
            if (!isNaN(price)) {
                total += price;
            }
        });
        return total;
    };

    const calculateMobilesTotal = () => {
        let total = 0;
        mobilesCart.forEach((item) => {
            const price = parseFloat(item.price);
            if (!isNaN(price)) {
                total += price;
            }
        });
        return total;
    };


    const calculateProductTotal = () => {
        let total = 0;
        productCart.forEach((item) => {
            const price = parseFloat(item.price);
            if (!isNaN(price)) {
                total += price;
            }
        });
        return total;
    };

    const grandTotal = parseInt(calculateDrinksTotal + calculateMobilesTotal + calculateProductTotal
    )

    if (cartLength === 0) {
        return (
            <div className='container mb-3 mt-5 pt-5 text-center'>

                <h1>Cart is empty</h1>
                <Link className='' to='/cocktail'>Click here to start shopping...</Link>
            </div>
        );
    }

    return (
        <>
            {/* ======================cocktail cart================================= */}

            {
                drinksCart.length > 0 &&
                <div className='mt-5 px-md-5 px-sm-0 table-responsive table-responsive-sm'>
                    <h1 className=' mt-5 '>Drinks Cart</h1>

                    <table className='table table-hover w-100 border border-1'>
                        <thead className=''>
                            <tr style={{ backgroundColor: "#3f158a" }} className="text-center text-light">
                                <th>Sr. no.</th>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className=''>Description</th>
                                <th>Qty.</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drinksCart.map((item, index) => {
                                const { strDrink, strDrinkThumb, strInstructions } = item;
                                return (
                                    <tr className="text-center align-text-bottom" key={index}>
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
                                        <td>{item.price}</td>
                                        <td className="text-truncate " style={{ maxWidth: "0px" }}>
                                            {strInstructions}
                                        </td>
                                        <td>
                                            <div className="input">
                                                <input style={{ width: "50px" }} defaultValue={1} className="" type="number" />
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteDrinksItem(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>

                </div>
            }

            {/* ===============================Mobiles-Cart======================= */}

            {
                mobilesCart.length > 0 &&

                <div className='   px-md-5 px-sm-0   table-responsive table-responsive-sm'>
                    <h1 className=' mt-5'>Mobiles Cart</h1>

                    <table className='table table-hover w-100 border border-1'>
                        <thead className=''>
                            <tr style={{ backgroundColor: "#3f158a" }} className="text-center text-light">
                                <th>Sr. no.</th>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className='description'>Descrption</th>
                                <th>Qty.</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                mobilesCart.map((item, index) => {
                                    const { title, thumbnail, description } = item;

                                    return (
                                        <tr className="text-center align-text-bottom" key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img
                                                    src={thumbnail}
                                                    alt=""
                                                    className="img-fluid"
                                                    style={{ height: "50px", width: "50px", borderRadius: "5px" }}
                                                />
                                            </td>
                                            <td>{title}</td>
                                            <td>{item.price}</td>
                                            <td className="text-truncate description" style={{ maxWidth: "0px" }}>
                                                {description}
                                            </td>
                                            <td>
                                                <div className="input">
                                                    <input style={{ width: "50px" }} defaultValue={1} className="" type="number" />
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => deleteMobilesItem(index)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>

                    </table>

                </div>
            }

            {/* ===============================clothes-Cart======================= */}

            {
                productCart.length > 0 &&
                <div className=' px-md-5 px-sm-0 table-responsive table-responsive-sm'>
                    <h1 className='mt-5'>Clothes Cart</h1>

                    <table className='table table-hover w-100 border border-1'>
                        <thead className=''>
                            <tr style={{ backgroundColor: "#3f158a" }} className="text-center text-light">
                                <th>Sr. no.</th>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className='description'>Descrption</th>
                                <th>Qty.</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productCart.map((item, index) => {
                                const { title, price, image, description } = item;
                                return (
                                    <tr className="text-center align-text-bottom" key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img
                                                src={image}
                                                alt=""
                                                className="img-fluid"
                                                style={{ height: "50px", width: "50px", borderRadius: "5px" }}
                                            />
                                        </td>
                                        <td>{title}</td>
                                        <td>{price}</td>
                                        <td className="text-truncate description" style={{ maxWidth: "0px" }}>
                                            {description}
                                        </td>
                                        <td>
                                            <div className="input">
                                                <input style={{ width: "50px" }} defaultValue={1} className="" type="number" />
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteProductItem(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>


                </div>
            }

            <div className='position-fixed bottom-0 w-100  mb-2 total-bar-outer'>
                <div className=' d-flex justify-content-between align-items-center total-bar '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='me-2'><h4 className='mb-0'>Total amount: </h4></div>
                        <div><h5 className='mb-0 me-4'>&#8377; {grandTotal} </h5></div>
                    </div>
                    <button style={{ backgroundColor: "#05b531" }} className='btn btn-sm text-light'>Proceed to payment <span className='fa-solid fa-angles-right fa-fade'></span></button>
                </div>
            </div>


        </>
    );
}

export default Cart;
