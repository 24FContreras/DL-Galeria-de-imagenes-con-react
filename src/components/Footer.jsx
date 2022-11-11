import "./Footer.css";
import Button from "react-bootstrap/Button";

const Footer = (props) => {
  return (
    <footer>
      <p>{props.description}</p>
      <Button variant="primary">{props.buttonText}</Button>
    </footer>
  );
};

export default Footer;
