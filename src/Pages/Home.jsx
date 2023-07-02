import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFakeApi } from '../Redux/fakeApiSlice'



function Home() {
    const dispatch = useDispatch();
    const { productList } = useSelector((state) => state.fakeApi)

    console.log();



    useEffect(() => {
        dispatch(fetchFakeApi())
    }, [])

    return (
        <div className='container p-5 mt-5'>
            <div className="row">
                {
                    productList &&
                    productList.map((item, index) => {
                        const {title} = item
                        return (
                            <div className="col-md-3">Name: {title} </div>
                        )
                    })
                }
            </div>
            <hr />

        </div>
    )
}

export default Home
