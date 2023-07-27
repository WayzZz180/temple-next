import styles from './CartCategory.module.sass'
import variables from '@/styles/_variables.module.sass'

//hooks
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CartCategory({setIdFromChild , idFromChild=1}) {
    const category = [
        { 
          text:'購物車',
          id:1,
        },
        { 
          text:'下次再買',
          id:2,
        },
      ]

    const router = useRouter();
    const [id, setId]= useState(1)

    useEffect(() => {
      setIdFromChild(id)
    }, [id])

  return (
    <>
    <div className={`${styles.flex_row}`}>
        {
            category.map((v,i)=>{
            return (
            <div className={`${styles.position} me15px`}>
                <button s
                  className={`${styles.button} fwBold fs20px`} 
                  style={{
                    background: v.id === idFromChild ? variables['brown'] : variables['bgColor'],
                    color:  v.id === idFromChild ? 'white' : variables['fontColor'],
                    opacity: v.id === idFromChild ? 1 : 0.5,
                    letterSpacing: '3px'
                   }}
                   onClick={()=>{
                    setId(v.id)
                   }}
                >{v.text}</button>
            </div>
            )
            
        })
        }
    </div>
    </>
  )
}
