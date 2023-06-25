import styles from './components.module.css'
import { setPage } from '../app/gameArraySlice'
import { useSelector, useDispatch } from 'react-redux'

export default function PageSelector() {
    const dispatch = useDispatch()
    const currentArray = useSelector(state => state.gamesArray.currentArray)
    console.log(currentArray.length)
    const handleClick = (event)=>{
        const page = Number(event.currentTarget.textContent)
        dispatch(setPage(page))
    }
    return <div className={styles.pageSelectorContainer}>
    <div className={styles.pageSelector}>
        {
            (() => {
                let pages = []
                for(let i=0; i<Math.ceil(currentArray.length/21); i++) {
                    pages.push(<a href='#' className={styles.noDecoration}>
                        <p className={styles.pageIndex}
                           onClick={handleClick}
                    >{i+1}</p>
                    </a>)
                }
                return pages
            })()
        }
    </div>
    </div>
}