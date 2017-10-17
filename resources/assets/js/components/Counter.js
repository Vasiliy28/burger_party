import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const initialState = {count:0};
function reducer(state = {count:0},action) {
    switch (action.type){
        case 'inc': return {count: state.count + action.amount};
        case 'dec': return {count: state.count - action.amount};
        case 'res': return {count: 0};
        default: return state;
    }

}

const incAction = {type:'inc', amount:1};
const decAction = {type:'dec', amount:1};
const resetAction = {type:'res'};
const store = createStore(reducer);


export default class Container extends Component {

    componentDidMount(){
        store.subscribe(() => this.forceUpdate())
    }
    increment(){
        store.dispatch(incAction);
        console.log(store.getState().count)
    }

    decrement(){
        store.dispatch(decAction);
    }
    reset() {
        store.dispatch(resetAction);
    }


    render() {
        return (
            <div className="container burger">
                <div className="row align-items-center justify-content-center">
                    <div className="col-5">
                        <button className="btn btn-success" onClick={this.increment}>+</button>
                        <button className="btn btn-primary" onClick={this.reset}>reset</button>
                        <button className="btn btn-danger" onClick={this.decrement}>-</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <span>{store.getState().count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Container />, document.getElementById('root'));
}
