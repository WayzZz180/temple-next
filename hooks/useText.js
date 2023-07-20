import { useState, useEffect } from 'react'

export function useText(initialValue) {
  const [details, setDetails] = useState(initialValue)

  useEffect(() => {
    setDetails(initialValue)
  }, [initialValue])

  return details?.replace(/\r\n/g, '<br />')
}
