//get all genres

const getGenres = (array) => {
    if(array){
        const genres = array.map((el) =>{
            return el.genre
        })
        let filteredGenres = []
        for(let i=0; i<genres.length; i++) {
            if(filteredGenres.indexOf(genres[i])<0)
              filteredGenres.push(genres[i])
        }
        return filteredGenres
    }
}

export { getGenres }