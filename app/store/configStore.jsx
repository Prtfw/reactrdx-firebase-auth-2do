import * as redux from "redux"
import {rdcrSearch, rdcrShocomp, rdcrTodos, rdcrAuth} from "rdcrs"
import thunk from 'redux-thunk'


export var config = (initS = {})=>{
    var reducer = redux.combineReducers({ // format = key: value, state on the state tree:rdcr resp for handling that state i.e. get from setdefault state
        searchtxt: rdcrSearch,
        shocomp: rdcrShocomp,
        todos: rdcrTodos,
        auth: rdcrAuth
    })
    
    var store = redux.createStore(reducer, initS, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f=>f //is this function the reducer?
        ))
        
        console.log(store)
        
    return store
}