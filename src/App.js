import './App.css';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import Axios from 'axios'

function App() {

  const [statePage, setStatePage] = useState('login')
  
  const validationLogin = yup.object().shape({
    celular: yup
      .string()
      .required("This field is required"),
    password: yup
      .string()
      .min(4, "The password has 4 character or below")
      .required("This field is required"),
  })

  const validationRegister = yup.object().shape({
    celular: yup
      .string()
      .required("This field is required"),
    password: yup
      .string()
      .min(4, "The password has 4 character or below")
      .required("This field is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "The password are not the same")
      .required("This field is required"),
  })


// Change Login or Register

  function clickLogin() {
    setStatePage ("login")
    formLogin()
  } 

  function clickRegister() {
    setStatePage ("register")
    formLogin()
  }

// Action to the mouse button click

  const handleClickLogin = (values) => {
    console.log (values)
    alert ('Login ok')
  }

  const handleClickRegister = (values) => {
    Axios.post("https://localhost:3001/", {
      celular: values.celular,
      password: values.password,
    }).then((response) => {
      console.log (response)
    })
    
    alert ('Register ok')
  }


  function formLogin() {

    if (statePage == 'login') {

// Login Page
      
      return (
    
        <div className = "App">
          
          <div id = "container-changePage-id">
            <button style = {{background: 'rgb(247, 140, 211)'}} className = "buttonChange-name" onClick = {clickLogin}>Login</button>
            <button className = "buttonChange-name" onClick = {clickRegister} >Register</button>
          </div>
    
          <Formik
            initialValues = {{celular: '', password: ''}}
            onSubmit = {handleClickLogin}
            validationSchema = {validationLogin}
          >
               
            { () => (
              <Form className = "form-container-login">

                <p>
                  <label htmlFor = 'celular-id'>Celular</label>
                </p>
                <p>
                  <Field type = "number" name = "celular" id = "celular-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="celular"
                    className='form-error'
                  />
                </p>
    
                <p>
                  <label htmlFor = 'password-id'>Password</label>
                </p>
                <p>
                  <Field type = "password" name = "password" id = "password-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="password"
                    className='form-error' 
                  />
                </p>
    
                <p>
                  <button id = "button-login-id" type = "submit">Login</button>
                </p>
    
                <p id = "container-forgotPass">
                  <a id = "forgotPass-id" href = "#" target = "_blank">Forgot my password</a>
                </p>
    
              </Form>
            )}
          </Formik>
    
        </div>
    
      );

    } else if (statePage =='register') {
      
// Register Page
      
      return (
    
        <div className = "App">
          
          <div id = "container-changePage-id">
            <button className = "buttonChange-name"  onClick = {clickLogin}>Login</button>
            <button style = {{background: 'rgb(247, 140, 211)'}} className = "buttonChange-name"  onClick = {clickRegister} >Register</button>
          </div>
    
          <Formik
            initialValues = {{celular: '', password: '', confirmPassword: ''}}
            onSubmit = {handleClickRegister}
            validationSchema = {validationRegister}
          >
            { () => (
              <Form className = "form-container-register">
    
                <p>
                  <label htmlFor = 'celular-id'>Celular</label>
                </p>
                <p>
                  <Field type = "number" name = "celular" id = "celular-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="celular"
                    className='form-error'
                  />
                </p>
    
                <p>
                  <label htmlFor = 'password-id'>Password</label>
                </p>
                <p>
                  <Field type = "password" name = "password" id = "password-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="password"
                    className='form-error'
                  />
                </p>

                <p>
                  <label htmlFor = 'confirmPassword-id'>Confirm password</label>
                </p>
                <p>
                  <Field type = "password" name = "confirmPassword" id = "confirmPassword-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="confirmPassword"
                    className='form-error'
                  />
                </p>
    
                <p>
                  <button id = "button-register-id" type = "submit">Register</button>
                </p>
    
              </Form>
            )}
          </Formik>
    
        </div>
    
      );

    }

  }

  return (
    <>
      {formLogin()}
    </>
  )
  
}

export default App;