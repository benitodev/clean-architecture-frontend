import { User } from '@/models'
import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './slices'
export interface AppStore {
    user: User
}

export default configureStore<AppStore>({
    reducer: {
        user: userReducer
    }
})