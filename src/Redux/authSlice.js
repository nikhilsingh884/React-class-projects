import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const login = createAsyncThunk("login", async ({formValue, navigate}) => {

    try {
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKmrEfz1uiGavj3tBhCo2EcAFFQiQIt7o", formValue)
        console.log(response);
        if(response.status===200){
            navigate("/")

        } 
    }
    catch (error) {
        alert('Please enter valid credentials', error.response.data.error.message)
    }
})

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        isLogin: false
    },
    reducers: {

    }
})

export default authSlice.reducer