import styles from './orderTitle.module.sass'
import varaibles from '@/styles/_variables.module.sass'
export default function OrderTitle({ data = [], info = [] }) {
  return (
    <>
      {info.map((v, i) => {
        return (
          <div key={i} className={`${styles.flex} fs20px`}>
            <div key={v.content + i} className={`${styles.container}`}>
              <div className={`${styles.title} me30px fwBold`}>{v.title}</div>
              <div
                className={`${styles.content} fwBold`}
                style={{
                  color: v.title === '訂單金額' ? varaibles['hot_pink'] : '',
                }}
              >
                {v.content}
                {v.title === '配送方式' ? (
                  <span className={`${styles.status}`}>{data?.status}</span>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
