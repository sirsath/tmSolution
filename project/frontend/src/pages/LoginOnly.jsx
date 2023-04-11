import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const LoginOnly = ({ element }) => {
    const { login } = useSelector(state => state.Alluser)
    const navigate = useNavigate()
        (login && login) ? element : navigate("/Login")
    // return element
}