import { createSlice } from "@reduxjs/toolkit";

export const listSlice= createSlice({
    name:"list",
    initialState:{
        listData:[]
    },
    reducers:{
        addFriend:(state,action)=>{
            state.listData.push(action.payload)
            // state.friendsListData=[...friendsListData, {inputValue}]
        }
    }   
})

export const{addFriend}=listSlice.actions;
export default listSlice.reducer;