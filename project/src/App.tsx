import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'

function App() {
 

  return (

    <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/*! somente pessoas logadas tem acesso ao profile -> */}
              <Route path='/profile' element={<ProtectedLayout>
              <h2>Ola esse e o componente profile</h2>
            </ProtectedLayout>}>

              </Route>

              <Route path="/login" element={<Login />}>
              </Route>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
