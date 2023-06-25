import styles from './components.module.css'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function GameLine({i}) {
  var games = [];
  games = useSelector(state => state.gamesArray.currentArray)
  const page = useSelector(state => state.gamesArray.page)
  const start = (page-1) * 20
  games = games.slice(start, start + 21)

    return <div className={styles.gameLine}>
              {
                (() => {
                  let components = []
                  for(let j=i*3; j<=(i*3)+2; j++) {
                    components.push(<Card key={j} gameData={games[j]}/>)
                  }
                  return components
                })()
              }
              </div>
}
