import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const login = createAsyncThunk("login", async ({formValue, navigate},{dispatch}) => {

    try {
        dispatch(startLoading())
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKmrEfz1uiGavj3tBhCo2EcAFFQiQIt7o", formValue)
        console.log(response);
        if(response.status===200){
            navigate("/");
            dispatch(loginSuccess())
        } 
    }
    catch (error) {

        dispatch(loginFail(error.response.data.error.message))
        // alert('Please enter valid credentials', error.response.data.error.message)

    }
})

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        isLogin: false,
        loading:false,
        error:false,
        errorMsg:""
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.isLogin = true
        },
        loginFail: (state, action) => {
            state.loading = false
            console.log("error hai", action.payload)
            state.errorMsg=action.payload
            
            // state.errorMsg=action.payload;
        }
    }
})
export const {startLoading, loginSuccess, loginFail}= authSlice.actions;
export default authSlice.reducer
