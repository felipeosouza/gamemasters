import styles from './components.module.css'

export default function Card({gameData}) {
    let src, link, name, gameDescription, genre;

    if(gameData) {
        src = gameData.thumbnail
        link = gameData.game_url
        name = gameData.title
        genre = gameData.genre
        gameDescription = gameData.short_description
        return <div className={styles.gameCard}>
            <a href={link}
            target="_blank"
            rel="noreferrer">
                <img src={src}
                    alt="Game Background"
                    className={styles.gameBackground}
                />
            </a>
            <div className={styles.gameInfo}>
                <h1 className={styles.gameTitle}>{name + ` (${genre})`}</h1>
                <div className={styles.gameDescriptionContainer}>
                <p className={styles.gameDescription}>{gameDescription}</p>
                </div>
            </div>
        </div>
    } else return null
}