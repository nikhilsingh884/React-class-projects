import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

function getLocalStorage(){
    const isLogin= localStorage.getItem("appLogin")
        if (isLogin){
            return true
        }else{
            return false
        }
    
}

export const login = createAsyncThunk("login", async ({ formValue, navigate }, { dispatch }) => {

    try {
        dispatch(startLoading())
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKmrEfz1uiGavj3tBhCo2EcAFFQiQIt7o", formValue)
        console.log(response);
        if (response.status === 200) {
            navigate("/");
            dispatch(loginSuccess())
        }
    }
    catch (error) {

        dispatch(loginFail(error.response.data.error.message))
    }
})

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        isLogin: getLocalStorage(),
        loading: false,
        error: false,
        errorMsg: ""
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            localStorage.setItem("appLogin", "true")

            state.loading = false
            state.isLogin = true
        },
        loginFail: (state, action) => {
            let errorMessage = action.payload

            if (errorMessage === "INVALID_PASSWORD" || errorMessage === "EMAIL_NOT_FOUND") {
                errorMessage = "Email or Password is incorrect"
            }

            state.loading = false
            console.log("error hai", action.payload)
            state.errorMsg = errorMessage

            // state.errorMsg=action.payload;
        },
        logout:(state,action)=>{
            alert("Logout?")
            state.isLogin=false
            localStorage.removeItem("appLogin");

        }
    }
})
export const { startLoading, loginSuccess, loginFail,logout } = authSlice.actions;
export default authSlice.reducer
