var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
import {SearchTD} from 'searchTD' 

//for res components usually there is one place that calls the prop functions passed down from the parent... this the pieace we usually wana test
/*for testing with spy 
1. make spy = expect.createSpy()
2. define the compo using componame= TestUtils.renderIntoDocument(<compo u wana test nameofFUNCinCHILD = {spy})
3. set test value via refs componame.refs.refname.(property i.e. value) = somevalue
4. TestUtils.Simulate.<SomeAvailEvent>(theRefFromStep3)
*/    
describe('SearchTD', () => {
    it('should exit', () => {
        expect(SearchTD).toExist();
    })
    it('should dispatch chgsearch with entered input txt', () => {
        var searchtxt='madisrad'
        var spy = expect.createSpy();
        var action = {type: "CHNG_SEARCH",
        searchtxt }
        var search = TestUtils.renderIntoDocument(<SearchTD dispatch={spy}/>) 
        search.refs.search.value = searchtxt
        TestUtils.Simulate.change(search.refs.search)
        expect(spy).toHaveBeenCalled(action)
    })
    it('should dispatch chngshocomp with proper checkbox val', () => {
        var spy = expect.createSpy()
        var action ={ type: "CHNG_SHOCOMP"}
        var search = TestUtils.renderIntoDocument(<SearchTD dispatch={spy} />)
        search.refs.shocomp.checked = true
        TestUtils.Simulate.change(search.refs.shocomp)
        expect(spy).toHaveBeenCalledWith(action)
    })
})