import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement,incrementBy} from '../redux/features/Counter'

export default function Conuter() {

    let dispatch = useDispatch();

    let counterState = useSelector((state) => {
        return state.counter
    })

    let {count} = counterState;

    let inc = () => {
        dispatch(increment())
    }

    let dec = () => {
        dispatch(decrement())
    }

    let incBy = () => {
        dispatch(incrementBy(5))
    }


  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <p className="display-6">Counter</p>
                    </div>
                    <div className="card-body">
                        <p className="h3">{count}</p>
                        <button onClick={inc} className='btn btn-dark m-1'>increment</button>
                        <button onClick={dec} className='btn btn-warning m-1'>decrement</button>
                        <button onClick={incBy} className='btn btn-primary m-1'>increment By 5</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
