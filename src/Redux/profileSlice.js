import { createSlice } from "@reduxjs/toolkit";
import Image from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg'

const profileSlice = createSlice({

    name: "profile",
    initialState: {
        name: "Ashish",
        address: "Surat",
        image: Image
    },
    reducers:{
        changeName:(state,action)=>{
            state.name= action.payload
        },
        emptyName:(state)=>{
            state.name=""
        },
        removeImage:(state)=>{
            state.image=null;
        },
        changeImage:(state)=>{
            state.image=img2
        }
    }
})
export const { changeName, emptyName, removeImage, changeImage }=profileSlice.actions
export default profileSlice.reducer