import {configureStore} from '@reduxjs/toolkit'
import {AppReducer} from '../globalState/slice'


export const store = configureStore({
    reducer:{
        brandReducer:AppReducer
    }
})