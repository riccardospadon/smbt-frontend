import { useState } from "react";
import axios from "axios";
import { Form, FloatingLabel, Button, Container, Row } from "react-bootstrap";

export default function TweetForm({ addTweet }) {
  const [username, setUsername] = useState(""); // Stessa cosa per l'username
  const [text, setText] = useState(""); // All'inizio non avrò alcun testo, per cui setto useState vuoto

  const handleSubmit = async (event) => {
    event.preventDefault(); // evitare di far accadere l'evento di fare un "submit" del tweet
    try {
      // metodo POST per aggiungere un tweet tramite il form
      const response = await axios.post("http://localhost:3050/api/tweets", {
        username,
        text
      });
      addTweet(response.data);
      setUsername("")
      setText("");
    } catch (error) {
      console.error("Errore nella creazione del tweet! ", error);
    }
  };

  // Quello che vedremo sulla pagina...
  return (
    <Container className="mb-5">
      <Row>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            label="Username"
            className="mb-3"
            style={{ color: "black" }}
          >
            <Form.Control
              value={username}
              as="textarea"
              placeholder="Inserisci il tuo username"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            label="Tweet"
            className="mb-3"
            style={{ color: "black" }}
          >
            <Form.Control
              onChange={(event) => setText(event.target.value)}
              value={text}
              as="textarea"
              placeholder="Scrivi un tweet"
              required
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Tweet
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
