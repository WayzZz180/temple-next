import React, { useContext, useEffect } from 'react'
import Router from 'next/router'
import AuthContext from '@/contexts/AuthContext'

export default function logout() {
  const { auth, setAuth, logout } = useContext(AuthContext)

  useEffect(() => {
    const handleLogout = async () => {
      // 執行登出邏輯（這裡假設你的logout函式正確處理了登出行為）
      logout()
      // 等待處理完畢後再導向首頁
      await Router.push('/')
    }

    handleLogout()
  }, [setAuth])

  return <></>
}
