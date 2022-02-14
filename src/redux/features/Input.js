import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    users : [
        {
            name : 'naishadh',
            select : false
        },
        {
            name : 'alok',
            select : false
        },
        {
            name : 'vidhi',
            select : false
        },
        {
            name : 'babu',
            select : false
        },
        {
            name : 'harshit',
            select : false
        },
        {
            name : 'pratik',
            select : false
        }
    ]
}

const inputSlice = createSlice({
    name : 'input',
    initialState : initialState,
    reducers : {
        selectThis : function(state,action){
            let updatedUsers = state.users.map((user) => {
                if(user.name === action.payload){
                    return {
                        ...user,
                        select : !user.select
                    }
                }else {
                    return user
                }
            })

            state.users = updatedUsers

        }
    }
})

export const {selectThis} = inputSlice.actions
export default inputSlice.reducer