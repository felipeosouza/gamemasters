import '@popperjs/core'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './components.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector, useDispatch } from 'react-redux'
import { setArray, setPage } from '../app/gameArraySlice'


export default function GenreDropdown() {
    const dispatch = useDispatch()
    const originalArray = useSelector(state => state.gamesArray.originalArray)
    const genres = useSelector(state => state.gamesArray.genres)

    const filterByGenre = (genre) => {
        let newArray = originalArray.filter((el)=>{
            const elGenre = el.genre
            if(elGenre == genre) return true
        })
        if(newArray.length == 0) newArray = originalArray
        dispatch(setArray(newArray))
        dispatch(setPage(1))
    }

    const handleItemClick = event => {
        const genre = event.currentTarget.textContent
        filterByGenre(genre)
    }
    return <div className={styles.dropdownContainer}>
    <DropdownButton id="dropdown-basic-button" title="Genres" data-bs-theme="dark" variant='secondary'>
       <Dropdown.Item href="#"
                    onClick={handleItemClick}
                >All</Dropdown.Item>
      {
        (() => {
            let genreComponents = []
            for(let i=0; i<genres.length; i++) {
                genreComponents.push(
                <Dropdown.Item href="#"
                    onClick={handleItemClick}
                >{genres[i]}</Dropdown.Item>)
            }
            return genreComponents
        })()
      }
    </DropdownButton>
    </div>
}