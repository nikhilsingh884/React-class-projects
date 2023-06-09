import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getCocktailList= createAsyncThunk("getCocktailList",async()=>{

// //fetch axios method

// try {
//     const response= await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
//     return response.data.drinks

// } catch (error) {
//     console.log('error hai mere bhai', error)
// }
// }


// //fetch normal method

// //  async ()=>{
// //     try{
// //         const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
// //         const data = await resp.json();
// //         return data.drinks
// //     }
// //     catch(error){
// //         console.log(error)
// //     }
// //  }
//  )

export const getCocktailList=createAsyncThunk("fetchCocktailList", async(parameter,{})=>{
    console.log('parameter', parameter);
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        return response.data.drinks

    } catch (error) {
        console.log('error', error)
    }
})

const cocktailSlice=createSlice({
    name:"cocktailSlice",
    initialState:{
        cocktailList:[],
        loading: true
    },
    reducers:{

    },
    extraReducers:{
        [getCocktailList.pending]:(state,action)=>{
            state.loading=true
        },
        [getCocktailList.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktailList=action.payload
        },
        [getCocktailList.rejected]: (state, action) => {
            state.loading = false;
        }

    }
})

export default cocktailSlice.reducer