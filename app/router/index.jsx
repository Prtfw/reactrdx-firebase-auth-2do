    import React from 'react'
    import {Route, Router, hashHistory} from 'react-router'
    
    
    import Tdapp from 'tdapp'
    import Login from 'login'
    import fbase from 'app/fbase'
    
    var reqLogin = (nxtState, rep, next) =>{
        if (!fbase.auth().currentUser){
            rep('/')
        }
        next();
    }
    
    
    export default(

            <Router histor={hashHistory}>
                 <Route path="/" component={Login}/>
                        <Route path="todos" component={Tdapp} onEnter={reqLogin}/> 
            </Router>

                    )