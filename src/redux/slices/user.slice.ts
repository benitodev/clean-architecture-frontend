import { initialUser, User } from '@/models'
import {createSlice} from '@reduxjs/toolkit'

interface Action {
    payload: User;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: { 
        createUser: (state, action: Action) => {
            return action.payload
        },
        modifyUser (state, action: Action) {
            return {
                ...state, ...action.payload
            }
        },
        resetUser: () => initialUser
    }
})

export const {createUser, modifyUser, resetUser} = userSlice.actions

export default userSlice.reducer