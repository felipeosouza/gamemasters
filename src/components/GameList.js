import GameLine from './GameLine'
import styles from './components.module.css'
import { useSelector } from 'react-redux'
import PageSelector from './PageSelector'

export default function GameList() {
    const page = useSelector(state => state.gamesArray.page)
    return <div className={styles.gameList}>
        {
          (() => {
            let components = []
            for(let column=0; column<21/3; column++) {
              components.push(<GameLine key={column} column={column} page={page}/>)
            }
            return components
          })()
        }
        <PageSelector/>
    </div>
}