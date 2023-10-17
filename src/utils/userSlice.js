import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        adduser:(state,action)=>{
            return action.payload
            },
        removeUser:(state,action)=>{
            return null;    
        },
        updateUser:(state,action)=>{
            return{...state,...action.payload}
        }
        
    }
})
export const {adduser,removeUser,updateUser}=userSlice.actions
export default userSlice.reducer