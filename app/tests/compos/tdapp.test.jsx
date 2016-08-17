var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery'),
    
    
    {Provider} = require("react-redux"),
    configStore = require("configStore"),
   //must pull the OG todos compo from the variable using ES6 destructuring 
    Tdapp = require('tdapp')
    
    import Todos from "todos"

    
describe('Tdapp', () => {
     it('should exit', () => {
        expect(Tdapp).toExist();
    })
    
    it('should render todolist', () => {
        var store = configStore.config()
        var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <Tdapp />
        </Provider>)
        
        var todoapp = TestUtils.scryRenderedComponentsWithType(provider, Tdapp)[0]
        var todolst = TestUtils.scryRenderedComponentsWithType(todoapp, Todos)
        
        expect(todolst.length).toEqual(1)
    })

  
  /* //will be tested somewhere else
  it('should add todo to the todos state on handAddTodo', () => {
    var todoText = 'test text';
    var todoapp = TestUtils.renderIntoDocument(<Tdapp/>);
    todoapp.setState({todos: []});
    todoapp.handAdd2do(todoText);
    console.log(todoapp.state.todos[0])
    expect(todoapp.state.todos[0].txt).toBe(todoText);
  })
  */
  
    /* // no longer needed due to redux
    it('should toggle completed todos when handtoggle is called', () => {
        var todoData = {txt: 'text', done: false, id: 42}
        var todoapp = TestUtils.renderIntoDocument(<Tdapp />)
        todoapp.setState({todos: [todoData]});
        expect(todoapp.state.todos[0].done).toBe(false);
        todoapp.handToggle(todoData.id)
        expect(todoapp.state.todos[0].done).toBe(true);
    })
    
    */
    
});