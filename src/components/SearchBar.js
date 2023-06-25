import { useState } from 'react';
import styles from './components.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setArray, setPage } from '../app/gameArraySlice'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [barState, setBarState] = useState('')
    const originalArray = useSelector(state => state.gamesArray.originalArray)
    
    const searchByTitle = (array, searchString) => {
        const loweredString = searchString.toLowerCase()
        let newArray = array.filter((el)=>{
            const loweredTitle = el.title.toLowerCase()
            if(loweredTitle.indexOf(loweredString)>=0) return true
        })
        if(newArray.length == 0) newArray = originalArray
        dispatch(setArray(newArray))
    }

    return <div className={styles.searchBarContainer}>
        <form onSubmit={
            (event)=>{
                event.preventDefault()
                searchByTitle(originalArray, barState)
                dispatch(setPage(1))
            }}>
        <input className={styles.search}
               type="text"
               value={barState}
               spellCheck={false}
               placeholder='Search for game titles'
               onChange={(event)=> setBarState(event.target.value)}
        ></input>
        </form>
    </div>
}