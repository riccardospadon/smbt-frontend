import SingleTweet from '../SingleTweet';

export default function TweetList ({ tweets, like }) {
    return(
        <div>
            {tweets.map(tweet => (
                <SingleTweet key={tweet.id} tweet={tweet} like={like}/>
            ))}
        </div>
    )
}