import styles from './CartCategory.module.sass'
import { useRouter } from 'next/router'
import NoButton from '@/components/common/button/noButton'
export default function CartCategory() {
    const category = [
        { 
          path:'/shop/cart',
          text:'購物車',
        },
        { 
          path:'/shop/wannaBuy',
          text:'下次再買',
        }
      ]

    const router = useRouter();
    console.log(router.asPath)
  return (
    <div className={`${styles.flex_row}`}>

        {
            category.map((v,i)=>{
            return (
            <div style={{opacity: v.path === router.asPath ? 1 : 0.6}}>
                <NoButton  
                text = {v.text}
                btnColor = 'brown' 
                width = ''
                padding = '15px 60px'
                fontSize = '24px'
                borderRadius='0px'
                />
            </div>
            )
            
        })
        }
    </div>
  )
}
