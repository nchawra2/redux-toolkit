import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    loading : false,
    users : [],
    error : null
}

export const getUsers = createAsyncThunk('getUser/users', async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json()
    return data
})


const userListSlice = createSlice({
    name : 'usersLists',
    initialState : initialState,
    extraReducers : (builder) => {
        builder.addCase(getUsers.pending,(state,action) => {
            state.loading = true
        }).addCase(getUsers.fulfilled,(state,action) => {
            state.loading = false
            state.users = action.payload
        }).addCase(getUsers.rejected,(state,action) => {
            state.loading = false
            state.error = 'OPPS'
        })
    }
})

export default userListSlice.reducer