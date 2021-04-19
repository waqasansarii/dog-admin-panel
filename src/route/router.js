import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import Login from '../pages/login'
import AdminPanel from '../pages/adminPanel'
import Landing from '../pages/landing'

const AppRouter = ({user}) => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route  path='/login' >
                        {user? <Redirect to='/admin-panel' />: <Login />}
                    </Route>
                    <Route path='/admin-panel' >
                        {user? <AdminPanel /> : <Redirect to='/login' />}
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
