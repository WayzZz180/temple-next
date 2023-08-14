import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import AuthContext from '@/contexts/AuthContext'
import LoggingOut from '@/components/common/loggingOut'

export default function Logout() {
  const { logout } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLogout = async () => {
      // 延遲 3 秒顯示 loading 狀態
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setLoading(false) // 隱藏 loading 狀態

      // 執行登出邏輯
      logout()

      // 導向首頁
      await Router.push('/')
    }

    handleLogout()
  }, [logout])

  if (loading) {
    return <LoggingOut />
  }

  return null
}
