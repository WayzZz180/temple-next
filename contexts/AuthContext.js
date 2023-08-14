import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({})
export default AuthContext

export const noLoginState = {
  id: 0,
  // member_account: '',
  name: '',
  token: '',
}

export const AuthContextProvider = function ({ children }) {
  const [auth, setAuth] = useState({ ...noLoginState })

  const logout = () => {
    localStorage.removeItem('auth')
    setAuth(noLoginState)
  }

  useEffect(() => {
    const str = localStorage.getItem('auth')
    if (str) {
      try {
        const obj = JSON.parse(str)
        setAuth(obj)
        console.log(`authcontext測試 看有沒有setAuth obj? `, obj)
      } catch (ex) {}
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
