var uuid = require("node-uuid"),
    moment = require("moment")
    

export var rdcrSearch = (state = '', action) =>{
    switch(action.type){
        case "CHNG_SEARCH": 
            return action.searchtxt
        default: 
            return state
    }
}

export var rdcrShocomp = (state = false, action) =>{
    switch(action.type){
        case "CHNG_SHOCOMP": 
            return !state
        default: 
            return state
    }
}

export var rdcrTodos = (state = [], action) => {
    switch (action.type){
        case "ADDTD":
            return [...state, action.todo]
            
        case "ADDTDS":
            return [...state, ...action.todos]
        
        case "UPDTD":
            return state.map((todo) =>{
                if (todo.id == action.id){
                    // console.log(' from ', todo.done) 
                    // var done = !todo.done
                    // console.log('rdcr ', {...todo, done: done, doneDate: moment().unix()})
                    return {...todo, ...action.upd}
            }else{ return todo}
            })
        default: 
            return state
    }
}

export var rdcrAuth = (state = {}, action) =>{
    console.log('in rdcrAuth')
    switch(action.type){
        case "AUTH_T": 
            console.log('catching uid')
            return {uid: action.uid}
        case "AUTH_F":
            return  {}
        default:
            console.log('in rdcrAuth, rt default')
            return state
    }
}