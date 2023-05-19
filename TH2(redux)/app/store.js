import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { manageUserReducer } from '../features/manageApp/User/reducers'

export default configureStore({
    reducer: {
        counter: counterReducer,
        manageUser: manageUserReducer,
    },
})