import React from 'react'
import ReactDOM from 'react-dom'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
       <Register />
       <GlobalStyles />
    </>,
    
    document.getElementById('root'))
