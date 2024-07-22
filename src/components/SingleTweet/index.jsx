import { Button, Container } from "react-bootstrap"
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
            <Container className="mb-5">
            <h3>{tweet.username}</h3>
            <p>{tweet.text}</p>
            <Button onClick={handleLike} className={cn(styles.buttonLike)}> {/* Bottone del "mi piace" */}
                {liked ? <HeartFill color='red' /> : <Heart />}
            </Button>
            <span>Likes: {tweet.likes}</span>
            </Container>
        </div>
    )
}