import React, { Fragment, useState } from 'react'
import Footer2 from '../../footer2'
import { useDispatch, useSelector } from 'react-redux'
import ContainerComp from '../../Layout/Container/Container'
import * as action from '../../../store/actions/index'
import { Card, Button, CardBody } from 'reactstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup] = useState(true)
  const dispatch = useDispatch()
  const onAuth = (emails, passwords, isSignups) =>
    dispatch(action.auth(emails, passwords, isSignups))
  const submitHandler = (event) => {
    event.preventDefault()
    onAuth(email, password, isSignup)
  }
  return (
    <Fragment>
      <ContainerComp>
        <h4 className="text-center text-center font-weight-bold">
          Create your account
        </h4>
        <Card className="my-2">
          <CardBody className="bg-white">
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <Label for="email">
                  <span className="font-weight-bold">Email</span>
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">
                  <span className="font-weight-bold">Password</span>
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                dsvxjhDSA
              </FormGroup>
              <FormGroup className="text-center m-2">
                <Button color="success">Sign Up</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        <div className="d-flex flex-row p-3 ">
          <h6 className="p-2">Already had an account?</h6>
          <Button type="button" className="btn btn-secondary btn-sm p-1">
            Sign in
          </Button>
        </div>
      </ContainerComp>
      <Footer2 />
    </Fragment>
  )
}

export default Signup
