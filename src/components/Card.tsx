import styles from './components.module.css'
import GameInfo from './GameInfo'

export default function Card({gameData}) {
    let src, link, name, gameDescription, publisher;

    if(gameData) {
        src = gameData.thumbnail
        link = gameData.game_url
        name = gameData.title
        gameDescription = gameData.short_description
        publisher = gameData.publisher
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
                <h1 className={styles.gameTitle}>{name}</h1>
                <div className={styles.gameDescriptionContainer}>
                <p className={styles.gameDescription}>{gameDescription}</p>
                </div>
            </div>
        </div>
    } else return null
}
/*
{
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
        "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "game_url": "https://www.freetogame.com/open/overwatch-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-10-04",
        "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    },
*/