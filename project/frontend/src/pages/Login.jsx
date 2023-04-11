import React, { useEffect } from 'react'
import { UserLoginAction } from '../Redux/Todordx/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useSelector(state => state.allUser)


  const dispatch = useDispatch()
  const loginFn = () => {
    dispatch(UserLoginAction({ email: 'Shubham@gamil.com', password: "123" }))
  }
  useEffect(() => {
    if (login) {
      navigate("/")
    }
  }, [login])
  return <>

    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="card">
            <div className='m-2'>
              <label for="name" class="form-label ">Email</label>
              <input type="text" class="form-control" id="name" placeholder="Enter Your Name" />
            </div>
            <div className='m-2'>
              <label for="text" class="form-label ">Password</label>
              <input type="text" class="form-control" id="text" placeholder="Enter Your password" />
            </div>
            <div className='m-3'>
              <button type="button"
                onClick={loginFn}
                class="btn btn-info">Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </>
}
