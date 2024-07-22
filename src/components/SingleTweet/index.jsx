import { Button } from "bootstrap"
import { Heart, HeartFill } from "react-bootstrap-icons"
import cn from 'classnames'
import styles from './style.module.scss'
import { useState } from "react"

export default function SingleTweet ({ tweet, like }) {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        if(!liked) {
            like(tweet.id)
            setLiked(true)
        }
    }

    return(
        <div className={cn(styles.tweet)}>
            <h5>{tweet.username}</h5>
            <p>{tweet.text}</p>
            <Button onClick={handleLike} className={cn(styles.buttonLike)}> {/* Bottone del "mi piace" */}
                {liked ? <HeartFill color='red' /> : <Heart />}
            </Button>
            <span>Likes: {tweet.likes}</span>
        </div>
    )
}