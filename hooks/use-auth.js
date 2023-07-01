import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// 最上層元件使用
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ id: 0, name: '', token: '' })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

// 消費者(後代元件)使用
export const useAuth = () => useContext(AuthContext)