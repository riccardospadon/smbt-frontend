import "./App.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import axios from "axios";

function App() {
  // Funzione che cambia il tema chiaro/scuro in base a quello impostato dal dispositivo
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark")
    setIsDarkMode(darkModeQuery.matches)

    const handleThemeChange = (event) => {
      setIsDarkMode(event.matches)
    }

    darkModeQuery.addEventListener("change", handleThemeChange)
    return () => {
      darkModeQuery.removeEventListener("change", handleThemeChange)
    }
  }, [])


  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('api/tweets')
        setTweets(response.data)
      } catch (err) {
        console.error('Errore nel recupero del tweet:', err)
      }
    }

      fetchTweets()
    }, [])

    const handleAddTweet = (newTweet) => {
      setTweets([...tweets, newTweet])
    }

    const handleLike = async (id) => {
      try{
        const response = await axios.post(`http://localhost:3050/api/tweets/${id}/like`)
        setTweets(tweets.map(tweet => tweet.id === id ? response.data : tweet))
      } catch (err) {
        console.error("Errore nell'aggiunta del like:", err)
      }
    }

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar />
      <TweetForm addTweet={handleAddTweet} />
      <TweetList tweets={tweets} like={handleLike}/>
      <Footer />
    </div>
  );
}

export default App;
