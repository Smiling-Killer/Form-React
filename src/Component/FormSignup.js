
import React from 'react'
import useForm from '../Hooks/useForm'
import Validate from '../Validation/Validate';
import './FormSignup.css';
const FormSignup = () => {
    const { handleChange, values ,onSubmit ,error } = useForm(Validate);

  return (
      <div className='FormContainer'>
          <form  onSubmit={onSubmit} className="ui large form">
              <h2 style={{textAlign:"center" ,padding:"20px",borderBottom:"1px solid lightgray"}}>Form SignUp</h2>
              <div className='field'>
                  <label htmlFor='username'>User Name</label>
                  <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Enter your Name..."
                      onChange={handleChange}
                      value={values.username}
                  />
                  {error.username && <span>{error.username}</span>}
              </div>
              <div className='field'>
                  <label htmlFor='email'>Email</label>
                  <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your valid email..."
                      className="form-input"
                      onChange={handleChange}
                      value={values.email}
                  />
                   {error.email && <span>{error.email}</span>}
              </div>
              <div className='field'>
                  <label htmlFor='password'>Password</label>
                  <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter your password..."
                      className="form-input"
                      onChange={handleChange}
                      value={values.password}
                  />
                   {error.password && <span>{error.password}</span>}
              </div>
              <div className='field'>
                  <label htmlFor='confirmpassword'>Confirm Password</label>
                  <input
                      id="confirmpassword"
                      type="password"
                      name="confirmpassword"
                      placeholder="Enter password again..."
                      className="form-input"
                      onChange={handleChange}
                      value={values.confirmpassword}
                  />
                   {error.confirmpassword && <span>{error.confirmpassword}</span>}
              </div>
              <div className='field'>
              <button className='ui primary button' type="submit">Sign Up</button>
              <p className='form-input-login'>
                  Already have an account? login <a href='#'>here</a>
              </p>
              </div>
             
          </form>
    </div>
  )
}

export default FormSignup