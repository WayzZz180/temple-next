import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const WannaBuyDataContext = createContext({})
export default WannaBuyDataContext


export const WannaBuyDataContextProvider = function ({ children }) {
const [ wannaBuyData, setWannaBuyData] = useState([])

  const router = useRouter();
  const getWannaBuyData = ()=>{
    fetch(`${process.env.API_SERVER}/shop/wannaBuy`)
    .then((r) => r.json())
    .then((data) => {
      setWannaBuyData(data)
    })
  }

  useEffect(() => {
    getWannaBuyData()
  }, [router.query])

  return (
    <WannaBuyDataContext.Provider value={{ wannaBuyData, setWannaBuyData, getWannaBuyData}}>
      {children}
    </WannaBuyDataContext.Provider>
  )
}