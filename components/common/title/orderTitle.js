import styles from './orderTitle.module.sass'

export default function OrderTitle({data=[]}) {
 
    
    const info = [
    {
        title: '訂單編號',
        content: data?.oid,
    },
    {
        title: '訂單日期',
        content: data?.created_at ? data?.created_at.slice(0,10) .replace(/\-/g, '/') : data?.created_at,
    },
    {
        title: '配送方式',
        content: `${data?.delivery}｜`,
    },
    {
        title: '付款方式',
        content: data?.payment,
    },
    {
        title: '收件資訊',
        content: data?.customer_address,
    },
]
  return (
    <>
        {info.map((v,i)=>{
            return (
                <div className={`${styles.flex} fs20px`}>
                    <div key={v.content+i} className={`${styles.container}`}> 
                        <div className={`${styles.title} me30px fwBold`}>{v.title}</div>
                        <div className={`${styles.content} fwBold`}>{v.content}{v.title ==='配送方式'? <span className={`${styles.status}`}>{data?.status}</span>:''}</div>
                    </div>
                </div>
                )
                
        })
        }
    </>
  )
}
