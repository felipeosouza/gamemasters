import styles from './components.module.css'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function GameLine({column, page}) {
  var games = [];
  games = useSelector(state => state.gamesArray.currentArray)
  const end = (page * 21) + 1
  games = games.slice(end-22, end)

    return <div className={styles.gameLine}>
              {
                (() => {
                  let components = []
                  for(let line=column*3; line<=(column*3)+2; line++) {
                    components.push(<Card key={line} gameData={games[line]}/>)
                  }
                  return components
                })()
              }
              </div>
}
