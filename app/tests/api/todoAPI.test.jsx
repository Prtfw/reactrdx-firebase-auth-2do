var expect = require("expect")

var todoapi = require("todoAPI")
var actions = require("actions")

describe('todoAPI', () => {
    beforeEach(()=>{  // test life cycle runs before each test
        localStorage.removeItem('todos')
    })
    it('should exist', ()=> {
        expect(todoapi).toExist()
    })
    
    /*describe('setTodos', () => {
    it('should set todo items', ()=> { 
            var todos = [{id:1, txt: 'testy mctestson', done: false}]
            todoapi.setTodos(todos)
            var actual = JSON.parse(localStorage.getItem('todos'))
            expect(actual).toEqual(todos) //toBe compares the obj in memory
        }) 
    })
    
    describe('setTodos', () => {
    it('should not set invalid data (not array)', ()=> { 
            var badtodos = {id:1, txt: 'testy mctestson', done: false}
            todoapi.setTodos(badtodos)
            var actual = JSON.parse(localStorage.getItem('todos'))
            expect(actual).toEqual(null) //toBe compares the obj in memory
        }) 
    })
    
    describe('getTodos', () => {
    it('should not get invalid items', ()=> { 
            // var todos = [{id:1, txt: 'testy mctestson', done: false}]
            // todoapi.setTodos(todos)
            var act = todoapi.getTodos()
            expect(act).toEqual([]) //toBe compares the obj in memory
        }) 
    })
    */
    


})

  describe('filter comp', () => {
                  var todos = [{id:1, txt: 'testy mctestson', done: true}, {id:2, txt: 'testy mctestson2', done: false}, {id:3, txt: 'testy mctestson3', done: false}]

    it('should show all items show completed is true ', ()=> { 
            
            var sub = todoapi.filter(todos, true, '')
            expect(sub.length).toEqual(todos.length) //toBe compares the obj in memory
        }) 
     
      it('should not show comp items show completed is false', ()=> { 
            
            var sub = todoapi.filter(todos, false, '')
            expect(sub.length).toEqual(2) 
        })   
        
    it('should put completed last if show all', ()=>{
        var sorted=todoapi.filter(todos,true,'')
        expect(sorted[0].id).toEqual(2)
    })
    
    it('should filter todos by serach txt', ()=>{
        var searched=todoapi.filter(todos, true, 'n3')
        expect(searched[0].id).toEqual(3)
    })

      
    it('should return all todos if serachtxt is empty', ()=>{
        var searched=todoapi.filter(todos, true, '')
        expect(searched.length).toEqual(todos.length)
    })
      
    
})
