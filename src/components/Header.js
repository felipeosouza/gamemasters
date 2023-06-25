import styles from './components.module.css'
import SearchBar from './SearchBar'

export default function Header() {

    return <div className={styles.header}>
        <div className={styles.headerDiv}>
        </div>
        <div className={styles.headerDiv}>
          <h1 className={styles.siteNameWhite}>Game</h1>
          <h1 className={styles.siteNameBlue}>Masters</h1>
        </div>
        <div className={styles.headerDiv}>
          <SearchBar/>
        </div>
    </div>
}