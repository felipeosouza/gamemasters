import styles from './components.module.css'

export default function Loading() {
    return <div className={styles.loading}>
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
        <p className={styles.errorMsg}>Loading...</p>
    </div>
}