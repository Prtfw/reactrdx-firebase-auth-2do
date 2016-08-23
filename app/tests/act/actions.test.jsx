var expect = require("expect")
import fbase, {fbaseref} from 'app/fbase'
var actions = require('actions')
import thunk from 'redux-thunk'

import configmockstore from "redux-mock-store"
var createmockstore = configmockstore([thunk])

describe('Actions', ()=>{
    
it('should gen search text action', () => {
       var action  = {
        type: "CHNG_SEARCH",
        searchtxt: 'some txt'
    }
        
        var res = actions.chngsearch(action.searchtxt)
    
        expect(res).toEqual(action)
    })
    
    
it ("should gen add todo action", ()=>{
    var action={
        type: "ADDTD",
        todo: {id:1113342, txt: 'testy mctestson', done: false, madeDate: 0, doneDate: undefined}
    }

    var res = actions.addTD(action.todo)
    expect(res).toEqual(action)
})

  it('should create todo and dispatch addTD', (done)=>{ //done = mocha <=> looking for async call
        const store = createmockstore({});
        const addtxt = 'check mail'
        
        store.dispatch(actions.startaddTD(addtxt)).then(()=>{
            const actions = store.getActions()
            expect(actions[0]).toInclude(
                {
                    type: 'ADDTD'
                })
            expect(actions[0].todo).toInclude({txt: addtxt})
            done()
        }).catch(done);
    })

it('should generate addtodos func', ()=> { 
        var todos = [{id:111, txt: 'testy mctestson', done: false, madeDate: 3000030, doneDate: undefined}]
        //localStorage.setItem('todos', JSON.stringify(todos)) //do not use setTodos... test one thing at a time!
        var action = {type: "ADDTDS", todos}
        var act = actions.addTDs(todos)
        expect(act).toEqual(action) //toBe compares the obj in memory
    })

it ("should change shocomp", ()=>{
    var action={
        type: "CHNG_SHOCOMP",
    }
    
    var res = actions.chngshocomp()
    expect(res).toEqual(action)
})

it ("should gen update todo action", ()=>{
    var action={
        type: "UPDTD",
        id: 3,
        upd: {done: false}
    }
    
    var res = actions.updTD(action.id, action.upd)
    expect(res).toEqual(action)
    })
    
    
    
it ('should gen authF action obj', () =>{
    const action={
        type: "AUTH_F"
    }
    
    const res = actions.authF()
    
    expect(res).toEqual(action)
})
    
it ('tests with FB todos', ()=>{
    var testTodoRef
    
    beforeEach((done)=>{
        var todosref = fbaseref.child('todos')
        
        //todosref.remove().then(()=>{
            testTodoRef = fbaseref.child('todos').push()

              testTodoRef.set({
            txt: 'testy mctestson', done: false, madeDate: 0
        })
        //})
        //.then(()=>{
            done()
            
        //})
        //.catch(done())
    })
    
    afterEach((done)=>{
        //testTodoRef.remove().then(()=> done())
        done()
    })
    
    it('should toggle todo and dispatch UPDTODO action',(done)=>{
        const store = createmockstore({})
        const action = actions.startdoneTD(testTodoRef.key, true)
        store.dispatch(action).then(()=>{
            const mockActions = store.getActions()
            expect(mockActions[0]).toInclude({type: "UPDTD", id: testTodoRef.key})
            expect(mockActions[0].upd).toInclude({done: true})
            expect(mockActions[0].upd.doneDate).toExist()

        done()
        }, done)
    })
})    
    
})