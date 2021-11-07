import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { useHistory, useLocation } from "react-router";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const bank = location.state.sBank;

  let logo = null;


  switch(bank) {
    case "alinma":
      logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Alinma_Bank_logo.svg/2560px-Alinma_Bank_logo.svg.png"
      break;
    case "alrajhi":
      logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Al_Rajhi_Bank_Logo.svg/799px-Al_Rajhi_Bank_Logo.svg.png"
      break;
    case "saan":
    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/SABB_Bank_Logo.svg/1200px-SABB_Bank_Logo.svg.png"
    break;
    case "bsf":
    logo = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bsf-logo.jpg"
    break;
    case "ab":
    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Alawal_Bank_Logo.svg/1280px-Alawal_Bank_Logo.svg.png"
    break;
    case "and":
    logo = "https://upload.wikimedia.org/wikipedia/en/7/71/Arab_National_Bank_Logo.jpg"
    break;
    default:
      logo = "https://cdn.dribbble.com/users/1783302/screenshots/14785073/bank_logo-01_4x.jpg"
  }

  return (
    <div className="Login">

      
      
      <Form onSubmit={handleSubmit}>
      <img src={logo} alt="Bank Logo" class = "bankLogo"/>
        <Form.Group size="lg" controlId="email">

          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => {
            history.push({
              pathname: "/auth",
              state: { sBank: bank },
            });
          }}
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
