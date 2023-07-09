import styles from './ShopSearchBar.module.sass'
export default function ShopSearchBar() {
  return (
    <>
      <input
        type="text"
        className={`${styles.searchBar}`}
        placeholder="搜尋商品"
      ></input>
    </>
  )
}
