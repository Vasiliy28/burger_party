import React from 'react';
import ReactDOM from 'react-dom';

const Burger = props=>{
    return(
        <div className="container h-100">
            <div className="row h-100 align-content-center">
                <div className="col-4 order-3">
                    <a href="/" className="btn btn-primary">Test</a>
                </div>
                <div className="col-4 order-1">
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on top">
                    Tooltip on top
                </button></div>
                <div className="col-4 order-2">Col 3</div>
            </div>
        </div>
    )
};

if(document.getElementById('root')){
    ReactDOM.render(<Burger/>,document.getElementById('root'))
}