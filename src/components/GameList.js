import GameLine from './GameLine'
import styles from './components.module.css'
import { useSelector } from 'react-redux'

export default function GameList() {
  
    return <div className={styles.gameList}>
        {
          (() => {
            let components = []
            for(let i=0; i<21/3; i++) {
              components.push(<GameLine key={i} i={i}/>)
            }
            return components
          })()
        }
    </div>
}