import './App.css';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import React, { useState } from 'react';
import * as yup from 'yup';

function App() {

  const [statePage, setStatePage] = useState('login')
  
  const validationLogin = yup.object().shape({
    user: yup
      .string()
      .required("This field is required"),
    password: yup
      .string()
      .min(4, "The password has 4 character or below")
      .required("This field is required"),
  })

  const validationRegister = yup.object().shape({
    user: yup
      .string()
      .required("This field is required"),
    password: yup
      .string()
      .min(4, "The password has 4 character or below")
      .required("This field is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"),null], "The password are not the same")
      .required("This field is required"),
  })

  function clickLogin() {
    setStatePage ("login")
    formLogin()
  } 

  function clickRegister() {
    setStatePage ("register")
    formLogin()
  }

  const handleClickLogin = (values) => {
    console.log (values)
    alert ('Login ok')
  }
  const handleClickRegister = (values) => {
    console.log (values)
    alert ('Register ok')
  }

  function formLogin() {

    if (statePage == 'login') {
      
      return (
    
        <div className = "App">
          
          <div id = "container-changePage-id">
            <button style = {{background: 'rgb(247, 140, 211)'}} className = "buttonChange-name" onClick = {clickLogin}>Login</button>
            <button className = "buttonChange-name" onClick = {clickRegister} >Register</button>
          </div>
    
          <Formik
            initialValues = {{user: '', password: ''}}
            onSubmit = {handleClickLogin}
            validationSchema = {validationLogin}
          >
               
            { () => (
              <Form className = "form-container-name">

                <p>
                  <label htmlFor = 'user-id'>User</label>
                </p>
                <p>
                  <Field type = "number" name = "user" id = "user-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="user"
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
      
      return (
    
        <div className = "App">
          
          <div id = "container-changePage-id">
            <button className = "buttonChange-name"  onClick = {clickLogin}>Login</button>
            <button style = {{background: 'rgb(247, 140, 211)'}} className = "buttonChange-name"  onClick = {clickRegister} >Register</button>
          </div>
    
          <Formik
            initialValues = {{user: '', password: '', confirmPassword: ''}}
            onSubmit = {handleClickRegister}
            validationSchema = {validationRegister}
          >
            { () => (
              <Form className = "form-container-name">
    
                <p>
                  <label htmlFor = 'user-id'>User</label>
                </p>
                <p>
                  <Field type = "number" name = "user" id = "user-id"></Field>
                  <ErrorMessage 
                    component="span"
                    name="user"
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