import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../redux/features/UserLists'

function UserLists() {

  let dispatch = useDispatch()

  useEffect(() => {
      dispatch(getUsers())
  },[dispatch])

  let listsState = useSelector((state) => {
    return state.users
  })

  let {users, loading , error} = listsState

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
            {
              loading ? <h1>Loading...</h1> : <table className='table table-hover'>
                <thead className='bg-primary text-white'> 
                  <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>name</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            }
        </div>
      </div>
    </div>
  )
}

export default UserLists