import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { BellFill, GearFill, PersonFill, Search, Twitter } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import styles from "./style.module.scss";
import cn from "classnames";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className={cn(styles.navBg, "mb-5")}>
        <Container>
          <Navbar.Brand className={cn(styles.alignText)}>
            <h1 className="me-3">SMBT</h1> <Twitter size={40} />
          </Navbar.Brand>

          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button variant="secondary">
                    <Search size={20}/>
                </Button>
              </Col>
            </Row>
          </Form>

          <div>
            <BellFill size={30} className="mx-3"/>
            <PersonFill size={30} className="me-3"/>
            <GearFill size={30}/>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
