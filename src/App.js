import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/cartSlice";
import { changeName, emptyName, removeImage, changeImage } from "./Redux/profileSlice";
import { changeProductName, addProducts, addProductDetails } from "./Redux/products"
import { useState } from "react";
import List from "./List";


function App() {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState(0)
    const [userName, setUsername] = useState("")

    const { totalItem } = useSelector((state) => (("state", state.cart)));
    const { name, address, image } = useSelector((state) => ((state.profile)));
    const { productName, productDetails, allProducts } = useSelector((state) => ((state.products)));
    return <List />


    return (
        <>
            <div className="container py-4">
                <h1>Hello world</h1>
                {/* <h5>FormValue: {formValue}</h5> */}
                <h2>Total Item: {totalItem}</h2>
                <br />

                <input className="form-control mb-2" value={formValue} onChange={(e) => setFormValue(e.target.value)} />

                <button className="btn btn-sm btn-success  me-3" onClick={() => dispatch(increment(formValue))}>+</button>
                <button className="btn btn-sm btn-danger  me-3" onClick={() => dispatch(decrement(formValue))}>-</button>
                <hr />
                <div>
                    <h1>Profile</h1>
                    <h3>Name:{name} </h3>
                    <input value={userName} onChange={(e) => setUsername(e.target.value)} />
                    {/* <button >Change name</button> */}
                    <p>{address}</p>
                    <img src={image} style={{ height: "300px", marginRight: "20px", borderRadius: "15px" }} />

                    <button className="btn btn-sm btn-success me-3" onClick={() => dispatch(changeName(userName))}>Change name</button>

                    <button className="btn btn-sm btn-danger me-3" onClick={() => dispatch(emptyName())}>Remove name</button>

                    <button className="btn btn-sm btn-danger me-3" onClick={() => dispatch(removeImage())}>Remove Image</button>

                    <button className="btn btn-sm btn-danger me-3" onClick={() => dispatch(changeImage())}>change Image</button>

                </div>
                <hr />
                <div>
                    <h4>Product name: {productName}</h4>
                    <button className="btn btn-sm btn-danger me-3" onClick={() => dispatch(changeProductName())}>Change product name</button>

                    <hr />

                    <h4>{
                        allProducts.map((item) => {
                            return (<h4>{item}</h4>)
                        })
                    }
                    </h4>

                    <button className="btn btn-sm btn-danger me-3" onClick={() => dispatch(addProducts())}>Add products</button>
                    <hr />

                    <h3>Product details: </h3>
                    <h5>
                        {
                            productDetails.map((item) => {
                                const { productName, description } = item;
                                return (
                                    <>
                                        <h4>{productName}</h4>
                                        <h4>{description}</h4>
                                    </>
                                )
                            })
                        }
                    </h5>
                    <hr />


                </div>
            </div>
        </>
    )
}
export default App;