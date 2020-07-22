import Footer2 from "../../footer2";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../store/actions/index";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const onAuth = (emails, passwords, isSignups) =>
    dispatch(action.auth(emails, passwords, isSignups));
  const isAuthenticated = useSelector((state) => state.Auth.token !== null);
  const submitHandler = (event) => {
    event.preventDefault();
    onAuth(email, password, isSignup);
  };
  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }

  return (
    <Fragment>
      {authRedirect}
      <Container className="themed-container my-3 px-0 " fluid="sm">
        <Col
          sm="12"
          md={{ size: 8, offset: 2 }}
          lg={{ size: 4, offset: 4 }}
          className=""
        >
          <Card className="my-5">
            <CardHeader className="">
              <h4 className="text-center">Sign in to your account</h4>
            </CardHeader>
            <CardBody className="bg-white">
              <Form onSubmit={submitHandler}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Row>
                    <Col xs="8">
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                    <Col xs="4">
                      <Button outline color="primary" className="p-1">
                        Send OTP
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="text-center m-2">
                  <Button color="success">Submit</Button>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter className="d-flex flex-row p-3">
              <h6 className="p-2">Don't have an account?</h6>
              <Button type="button" className="btn btn-secondary btn-sm p-1">
                Create an Account
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Footer2 />
      </Container>
    </Fragment>
  );
};

export default Signin;
