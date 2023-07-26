import styles from './CartCategory.module.sass'
import variables from '@/styles/_variables.module.sass'

//hooks
import { useRouter } from 'next/router'



export default function CartCategory() {
    const category = [
        { 
          path:'/shop/cart',
          text:'購物車',
        },
        { 
          path:'/shop/wannaBuy',
          text:'下次再買',
        },
      ]

    const router = useRouter();
    // console.log(router.asPath)
  return (
    <>
    <div className={`${styles.flex_row}`}>
        {
            category.map((v,i)=>{
            return (
            <div style={{opacity: v.path === router.asPath ? 1 : 0.5}} className={`${styles.position} me15px`}>
                <button className={`${styles.button} fs20px`} 
                style={{background: v.path === router.asPath ? variables['brown'] : variables['bgColor'],
                color:  v.path === router.asPath ? variables['bgColor'] : variables['fontColor']
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
