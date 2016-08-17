var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery'),
    {Provider} = require("react-redux")
    
 import ConnectedTodo,  {Todo} from "todo"
 import ConnectedTodos from "todos"
 import * as actions from 'actions'

 import {config} from 'configStore'

describe('Todo', () => {
    it('should exit', () => {
        expect(Todo).toExist();
  
    })
    it('should render one todo for each item', ()=>{
        var todos=[{
            id: 1,
            txt: 'soemthing 2 do',
            done: false,
            madeDate: 500,
            doneDate: undefined
        },
        {
            id: 2,
            txt: 'soemthing 222222 do',
            done: false,
            madeDate: 500,
            doneDate: undefined
        }]
        
        var store = config({todos:todos})
        var provider=TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodos/>
            </Provider>);
        
        var todoslst = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodos)[0]
        var todocompos = TestUtils.scryRenderedComponentsWithType(todoslst, ConnectedTodo)
        
        expect(todocompos.length).toBe(todos.length)
    })
    it('should dispatch changeDone action when clicked ', () => {
        var todo={
            id: 19399,
            txt: 'write soem tests',
            done: true
        }
        var action = actions.startdoneTD(todo.id, !todo.done)
        var spy = expect.createSpy()
        var todo = TestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy} />)
        var $el = $(ReactDOM.findDOMNode(todo))
        TestUtils.Simulate.click($el[0])
        
        expect(spy).toHaveBeenCalledWith(action)

  
    })
})