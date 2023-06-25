"use client";
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Loading from '../components/Loading'
import ContentHandler from '@/components/ContentHandler'
import GameList from '../components/GameList';
import Header from '../components/Header';
import GenreDropdown from '../components/GenreDropdown';
import store from './store'
import { Provider } from 'react-redux'
import { setArray, setOriginalArray, setGenres } from './gameArraySlice'
import { useDispatch, useSelector } from 'react-redux'



const App = () => {
  const dispatch = useDispatch()
  const currentArray = useSelector(state => state.gamesArray.currentArray)

  const [contentSituation, setContentSituation] = useState('fetching')
  const getData = async () => {
    const badStatuses = [500, 502, 503, 504, 507, 508, 509]
    const abortController = new AbortController()
    
    //fetching with timed out abortion
    var timeout = setTimeout(()=> {
      abortController.abort()
      setContentSituation('timed_out')
    }, 5000)

    const res = await fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
      headers : {
        "dev-email-address" : 'felipeosouzadev@gmail.com'
      },
      signal : abortController.signal
    })
    
    //clear timeout if within limit
    clearTimeout(timeout)
    
    //handling errors
    if(!res.ok){
      if(badStatuses.find((el) => res.status == el)){
        setContentSituation('bad_response')
      } else {
        setContentSituation('unexpected_response')
      }
    } else {
      setContentSituation('available')
    }
    const data = await res.json()
    
    if(res.ok) dispatch(setGenres(data))
    return data
  }

  useEffect(()=> {
    let data;
    (async () => {
      data = await getData()

      dispatch(setArray(data))
      dispatch(setOriginalArray(data))
    })()
  }, [])

  //rendering
  if(contentSituation == 'available') {
    return (
      <>
      <Header/>
      <GenreDropdown/>
      <main className={styles.main}>
        <GameList gamesArray={currentArray}/>
      </main>
      </>
    )
  } else if(contentSituation == 'fetching'){
    return <Loading/>
  } else {
    return <main className={styles.main}>
        <ContentHandler contentSituation={contentSituation}/>
      </main>
  }
}

export default function Home() {
   return <Provider store={store}>
      <App/>
   </Provider>
}