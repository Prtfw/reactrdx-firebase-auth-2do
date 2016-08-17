var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
var {Add2do} = require('addTD')

import * as actions from 'actions'




describe('Add2do', () => {
    it('should exit', () => {
        expect(Add2do).toExist();
    })
    
  
    
    it('should dispatch onAddTodo with valide data', () => {
        var addtxt = 'check mail'
        var action = actions.startaddTD(addtxt)
        var spy = expect.createSpy();
        var add2do = TestUtils.renderIntoDocument(<Add2do dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(add2do))
        add2do.refs.add.value = addtxt
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toHaveBeenCalledWith(action)
    })
    
    it('should NOT dispatch onAddTodo func on prop with bad data', () => {
        var addtxt = ''
        var spy = expect.createSpy();
        var add2do = TestUtils.renderIntoDocument(<Add2do dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(add2do))
        add2do.refs.add.value = addtxt
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toNotHaveBeenCalled()
    })
})