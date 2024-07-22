import { Row, Col } from "react-bootstrap";
import cn from "classnames";
import styles from "./style.module.scss";
import { Facebook, Github, Instagram, Linkedin } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div
      className={cn(
        styles.footBg,
        styles.textCenter,
        "w-100 mt-5"
      )}
    >
      <Row xs={12} className="w-100 justify-content-center">
        <Col xs={6} md={12} className={cn(styles.flexCenter, "mt-5 mb-5")}>
          <div>
            © 2024 Super Mega Basic Twitter. A product of Riccardo Spadon X
            Scuolapay.
          </div>
          <div className="ms-1">
            Check me on:
            <a
              className={cn(styles.noDecor)}
              href="https://github.com/riccardospadon"
            >
              <Github className="ms-3" size={30} />
            </a>
            <a
              className={cn(styles.noDecor)}
              href="https://www.linkedin.com/in/riccardo-spadondev/"
            >
              <Linkedin className="ms-3" size={30} />
            </a>
            <a
              className={cn(styles.noDecor)}
              href="https://www.instagram.com/riccardospadon/"
            >
              <Instagram className="ms-3" size={30} />
            </a>
            <a
              className={cn(styles.noDecor)}
              href="https://www.facebook.com/riccardo.spadon.56?locale=it_IT"
            >
              <Facebook className="ms-3" size={30} />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
