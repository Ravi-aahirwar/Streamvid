import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContexts'
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./SignUp.css"
export default function SignUp() {

  document.title="Streamvid | Signup"

  const navigate = useNavigate();
  
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  
  const { signUp } = useContext(AuthContext)

  const handleSubmitSignup = async (e)=>{
    e.preventDefault();
    try{
      await signUp(userDetails.email,userDetails.password)
      toast.success("User Signin successfully!");
      navigate("/login")
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage);
    }
  }
  return (

    <div className="signup-container">
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmitSignup}>
        <div className="name">
          <div>
            <label htmlFor="first-name">
              First Name <span>*</span>
            </label>
            <input
              id="first-name"
              placeholder="Test"
              required
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="last-name">
              Last Name <span>*</span>
            </label>
            <input
              id="last-name"
              placeholder="Admin"
              required
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className='new-email'>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            id="email"
            placeholder="user@gmail.com"
            required
            type="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <div className="password-wrapper">
            <input
              id="password"
              type= "password"
              placeholder="Enter password"
              required
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>

      <p onClick={() => navigate("/login")}>
        Already have an account
      </p>
    </div>
  </div>
  );
};
