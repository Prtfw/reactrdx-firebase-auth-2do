import fbase, {fbaseref, githubProv} from 'app/fbase/'
import moment from 'moment'

export var chngsearch= (searchtxt)=>{
    return {
        type: "CHNG_SEARCH",
        searchtxt
    }
}

export var addTD = (todo)=>{
    return {
        type: "ADDTD",
        todo
    }
}


//togle show comp + test

export var chngshocomp = () => {
    return {
        type: "CHNG_SHOCOMP"
    }
}

//toggle todo take id + test

export var updTD = (id, upd) => {
    return {
        type: "UPDTD",
        id,
        upd
    }
}

export var startdoneTD = (id, done) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid; //gets the redux store

        var todoref = fbaseref.child(`users/${uid}/todos/${id}`)
        var upd = {done, doneDate: done ? moment().unix()  : null}
        
        return todoref.update(upd).then(()=>{
            dispatch(updTD(id, upd))
        })
    }
}

export var addTDs = (todos) => {
    return {
        type: "ADDTDS",
        todos
    }
}


export var startaddTDs = () => {
    return(dispatch, getState) =>{
        //fbaseref.child('todos').once('value').then((pt)=>{console.log('1',pt.val())}, (e)=>{console.log(e)})
        
        var uid = getState().auth.uid; //gets the redux store

        fbaseref.child(`users/${uid}/todos`).once('value').then((todos)=>{
            var objtodos =  todos.val() || {}
            console.log(objtodos)
         var ids = Object.keys(objtodos)
         var arrtodos = []
         for (var id in ids){
             var k = ids[id]
             var tst =objtodos[k]
             arrtodos.push({id: k, ...objtodos[k]})
         }

        return dispatch(addTDs(arrtodos))
        }, (e)=>{console.log(e)})
        
        //return dispatch... dispatch add TDS
        //get data from fb by using .once('value').then((pt)=>{console.log('1',pt.val())}, (e)=>{console.log(e)})
        //tarnsform the data from obj into array with array TDS
        //then calls addTDS
        
        
        //todos
    }
}

export var startaddTD = (txt)=>{
    return (dispatch, getState)=>{
        var todo = { txt,  done: false, madeDate: moment().unix(), doneDate: null }
    
    var uid = getState().auth.uid; //gets the redux store
    var todoref = fbaseref.child(`users/${uid}/todos`).push(todo)
    
    return todoref.then(()=> {dispatch(addTD({...todo, id: todoref.key}))})
                                }
}


export var startLogin = () =>{
    return (dispatch, getState) => {
       return fbase.auth().signInWithPopup(githubProv).then((res)=> {console.log("auth good", res)
           
       },
        (e)=> {console.log('auth failure',e)})}
    }

export var startLogout = () =>{
    return (dispatch, getState) => {
       return fbase.auth().signOut().then(()=> {console.log("logged out")},
        (e)=> {console.log('logout fail',e)})}
    }



export var authT = (uid) => {
    console.log('AuthT', uid)
    return {
        type: "AUTH_T",
        uid
    }
}
    
export var authF = () => {
    return  {type: "AUTH_F"}
}



//togle show comp + test


//toggle todo take id + test