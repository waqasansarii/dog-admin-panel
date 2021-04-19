import React, { useState } from 'react'
import firebase from '../config/firebaseConfig'
import './styles/form.css'




const UserForm = () => {

    let [name, setName] = useState('')
    let [city, setCity] = useState('')
    let [brand, setBrand] = useState('')
    let [email, setEmail] = useState('')
    let [addres, setAddres] = useState('')
    let [msg, setMsg] = useState('')
    let [fromBool, setFormBool] = useState(false)
    let db = firebase.firestore().collection('userBrand')
    let userData = {
        name: name,
        city,
        brand,
        email,
        addres,
        msg
    }

    const sentData = (e) => {
        e.preventDefault()
        if (name && email) {
            setFormBool(true)
            console.log(name, city)
            db.doc().set(userData)
                .then(() => {
                    console.log('sent')
                    setFormBool(false)
                })
                .catch((e) => {
                    console.log(e, 'error')
                    setFormBool(false)

                })
            setBrand('')
            setCity('')
            setEmail('')
            setName('')
            setAddres('')
            setMsg('')

        }
        else {
            // return <div></div>
        }
    }

    return (
        <div id='form'>
            <div className='d-flex form_div'>
                <div className='from_head'>
                    <h3><strong>Formulario</strong></h3>
                </div>
                <form onSubmit={sentData} className='user_from'>
                    <div>
                        <label htmlFor="">Nombre completo</label>
                        <input
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nombre completo'
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email'
                        />
                    </div>
                    <div>
                        <label htmlFor="">Nombre tienda</label>
                        <input
                            type="text"
                            value={brand}
                            required={true}
                            onChange={(e) => setBrand(e.target.value)}
                            placeholder='Nombre tienda'
                        />
                    </div>
                    <div>
                        <label htmlFor="Cargo">Cargo</label>
                        <input
                            type="text"
                            value={city}
                            required={true}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='Cargo en la empresa'
                        />
                    </div>
                    <div>
                        <label htmlFor="addres">Dirección</label>
                        <input
                            type="text"
                            placeholder='Dirección'
                            value={addres}
                            onChange={(e) => setAddres(e.target.value)}
                        />
                    </div>
                    <div className='textarea_div'>
                        <p className='msg_label'>Mensaje:</p>
                        <textarea
                            name="msg"
                            id="msg"
                            placeholder='Mensaje:'
                            cols="56"
                            rows="4"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        ></textarea>
                    </div>
                    <button type='submit' disabled={fromBool}>
                        {fromBool ?
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Enviar</span>
                            </div>
                            : 'Enviar'
                        }
                        {/* Enviar */}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserForm
