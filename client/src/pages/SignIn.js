import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Auth_img from "../assets/SignIn.jpg";
import FormGroup from "react-bootstrap/esm/FormGroup";
import "../styles/SignInUp.css";
import signinValidations from "../validations/signinValidations";
import { Link } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";
import useLogin from "../hooks/useLogin";

// Disable the button until complete

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, loginUser } = useLogin();

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });

  // Validate user information
  function validate(e, values) {
    e.preventDefault(); // Prevent form submission
    const validationErrors = signinValidations(email, password);
    if (
      validationErrors.emailErrors.length > 0 ||
      validationErrors.pwrdErrors.length > 0
    ) {
      setErrors({
        email: validationErrors.emailErrors || [],
        password: validationErrors.pwrdErrors || [],
      });
      return; // Stop execution if there are errors
    }

    // Proceed with user registration only if validation passes
    loginUser({ email, password });
  }

  return (
    <div className="block block-SignIn" id="SignIn" style={{ width: "900px" }}>
      <Container fluid>
        <Row
          style={{ minHeight: 500, alighnItems: "stretch", display: "flex" }}
        >
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={Auth_img}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Container
              fluid
              style={{
                background: "#FFFFFF",
                padding: 20,
                height: "100%",
                width: "100%",
                color: "#000",
                paddingTop: 25,
              }}
            >
              <Row>
                <h2 className="h2">Welcome back!</h2>
              </Row>
              <Row>
                <h4 className="h4">Sign in</h4>
              </Row>

              <Form className="align-items-center" style={{ fontSize: "15px" }}>
                <FormGroup className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  {errors.email.length > 0 && (
                    <div className="text-danger">
                      {errors.email.map((error, index) => (
                        <div key={index} style={{ fontSize: "12px" }}>
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                  <Form.Control
                    type="email"
                    placeholder="Enter email here"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </FormGroup>

                <FormGroup className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  {errors.password.length > 0 && (
                    <div className="text-danger">
                      {errors.password.map((error, index) => (
                        <div key={index} style={{ fontSize: "12px" }}>
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                  <Form.Control
                    type="password"
                    placeholder="Enter password here"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </FormGroup>

                <Row>&nbsp;</Row>

                {error && <Alert variant="danger">{error}</Alert>}

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    className="btn"
                    type={loading ? "" : "primary"}
                    onClick={validate}
                  >
                    {loading ? <Spinner /> : "Sign In"}
                  </Button>
                </div>
              </Form>

              <Row>&nbsp;</Row>

              <p>
                Not registered yet? <Link to="/signup">Sign up now!</Link>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
