import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {selectThis} from '../redux/features/Input'

function Input() {

    let dispatch = useDispatch()

    let inputState = useSelector((state) => {
        return state.input
    })

    let {users} = inputState;

    let selectChange = (name) => {
        dispatch(selectThis(name))
    }

  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="col-md-6">
                <ul className='list-group'>
                    {
                        users.length > 0 &&
                        users.map((user) => {
                            return (
                                <li className='list-group-item'>
                                    <input type="checkbox" checked={user.select} onChange={() => selectChange(user.name)} className='me-2'/>
                                     {user.name}   
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="col-md-6">
            <ul className='list-group'>
                    {
                        users.length > 0 &&
                        users.map((user) => {
                            return (
                                user.select ? <li className='list-group-item'>
                                 {user.name.toUpperCase()}   
                            </li> : ''
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Input