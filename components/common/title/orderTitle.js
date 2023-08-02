import styles from './orderTitle.module.sass'
export default function OrderTitle() {
  const info = [
    {
        title: '訂單編號',
        content: '23061067307593',
    },
    {
        title: '訂單日期',
        content: '2023/06/10',
    },
    {
        title: '配送方式',
        content: '宅配｜已出貨',
    },
    {
        title: '付款方式',
        content: '信用卡一次付清',
    },
    {
        title: '收件資訊',
        content: '高雄市大樹區統嶺路1號',
    },
]
  return (
    <>
        {info.map((v,i)=>{
            return (
                <div className={`${styles.flex} fs20px`}>
                    <div key={v.content+i} className={`${styles.container}`}> 
                        <div className={`${styles.title} me30px fwBold`}>{v.title}</div>
                        <div className={`${styles.content} fwBold`}>{v.content}</div>
                    </div>
                </div>
                )
                
        })
        }
    </>
  )
}
