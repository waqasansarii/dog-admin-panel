import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import {InitialState} from './initialState'


export const brandsData = createAsyncThunk(
    'githubUsersDataSave/firestore',
    async (data)=>{
        return await data
    }
)

export const getCurrentUserInfo = createAsyncThunk(
    'currentUserInfo',
    async (data)=>{
        return await data 
    }
)

const brand = createSlice({
    name:'brands',
    initialState:InitialState,
    reducers:{
       addimg:(state,action)=>{
          state.images= action.payload
       },
       login:(state,action)=>{
          state.user=action.payload
       },
       logout:(state,action)=>{
            state.user=action.payload
       }
    },
    extraReducers:{
        [brandsData.fulfilled]:(state,action)=>{
            // let {name,email,brand,addres,msg,city} = action.payload
            // console.log(action.payload)
             state.brand= action.payload
            //  [{
            //        name,
            //         email,
            //         brand,
            //         addres,
            //         msg,
            //         city
            //     },...state.brand]
            
        },
        [getCurrentUserInfo.fulfilled]: (state, action) => {
            // console.log( action.payload)
            state.user=action.payload

        },
    
    }

})
export const {addimg,logout,login} = brand.actions

export const AppReducer = brand.reducer