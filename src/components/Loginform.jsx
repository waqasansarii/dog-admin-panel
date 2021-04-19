import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../config/firebaseConfig'
import {login} from '../globalState/slice'
import 'firebase/auth'
import './styles/login.css'
import { useDispatch } from 'react-redux'


const Loginform = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [load, setLoad] = useState(false)

    const handleLogin = () => {
        setLoad(true)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data) => {
                setLoad(false)
                 dispatch(login(true))
                history.push('/admin-panel')
                // console.log(data)
            }).catch((e) => {
                console.log(e)
                setLoad(false)
            })
    }


    return (
        <div>
            <div className='main_login_div'>
                <h1 className='login_head'>Log In</h1>
                <div className='input_fields_div'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className='inputs'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className='inputs'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='button' onClick={handleLogin} className='login' >
                        {load ? 
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Log in</span>
                            </div>
                            : 'log in'
                        }
                    </button>

                </div>
            </div>
        </div>
        // </div>
    )
}

export default Loginform
