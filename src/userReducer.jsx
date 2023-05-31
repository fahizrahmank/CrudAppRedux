import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name:'users',
    initialState:userList,
    reducers: {
        addUser: (state,action)  => {
        state.push(action.payload)
        },
        updateuser: (state,action)  => {
            const {email,name,id} = action.payload
            const foundObj = state.find((e) => e.id == id)
            if(foundObj){
            foundObj.name = name,
            foundObj.email = email
            } 
        },
        deleteuser: (state,action) => {
            const {id} = action.payload
            const found = state.find((e) => e.id == id)
            if(found){
                return state.filter((e) => e.id !== id)
            }
        }
    }
})
export const {addUser,updateuser,deleteuser} = userSlice.actions
export default userSlice.reducer