import SingleTweet from '../SingleTweet';

export default function TweetList ({ tweets, like }) {
    console.log('TweetList props: ', tweets) // Console.log per debug
    return(
        <div>
            {tweets.map(tweet => (
                <SingleTweet key={tweet.id} tweet={tweet} like={like}/>
            ))}
        </div>
    )
}