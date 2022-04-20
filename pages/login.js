import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Alert,
} from "react-bootstrap";

export default function Login() {
  const router = useRouter();
  const userLogin = (event) => {
    event.preventDefault();
    router.push("/success");
  };

  return (
    <section>
      <Head>
        <title>Login & Register</title>
      </Head>
      <Container fluid="md" className="m-2 p-2">
        <Row className="justify-content-md-center mb-3">
          <Col span={12} className="text-center">
            <h3>Login</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={userLogin}>
              <Form.Group className="p-2">
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter fullname"
                />
              </Form.Group>

              <Form.Group className=" p-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="p-2">
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control
                  id="mobile"
                  name="mobile"
                  type="text"
                  placeholder="Enter mobile phone number"
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size="lg">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
