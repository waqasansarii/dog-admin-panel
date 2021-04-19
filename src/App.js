import React,{useEffect, useState} from 'react'
import AppRouter from './route/router'
import firebase from 'firebase'
import {getCurrentUserInfo} from './globalState/slice'
import { useDispatch ,useSelector} from 'react-redux'
import './App.css'

function App() {

  const dispatch = useDispatch()
  const selector = useSelector((state)=>{
    return state.brandReducer.user
  })
  let [user,setUser] = useState(false)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user)
        setUser(true)
        dispatch(getCurrentUserInfo(true))
      }
    })
  },[])
  
  return (
    <div >
    <AppRouter user={selector}/>
    </div>
  );
}

export default App;
