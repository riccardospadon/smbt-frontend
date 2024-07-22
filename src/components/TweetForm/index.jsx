import { useState } from "react";
import axios from "axios";
import { Form, FloatingLabel } from "react-bootstrap";

export default function TweetForm({ addTweet }) {
  const [text, setText] = useState(""); // All'inizio non avrò alcun testo, per cui setto useState vuoto
  const [username, setUsername] = useState(""); // Stessa cosa per l'username

  const handleSubmit = async (event) => {
    event.preventDefault(); // evitare di far accadere l'evento di fare un "submit" del tweet
    try {
      // metodo POST per aggiungere un tweet tramite il form
      const response = await axios.post("http://localhost:3050/api/tweets", {
        text,
        username,
      });
      addTweet(response.data);
      setText("");
      setUsername("");
    } catch (error) {
      console.error("Errore nella creazione del tweet! ", error);
    }
  };

  // Quello che vedremo sulla pagina...
  return (
    <>
      <Form>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
      </Form>
    </>
  );
}