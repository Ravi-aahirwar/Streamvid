import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router";
import { AuthContext } from '../../contexts/AuthContexts';
import logo from '../../assests/logo.svg'
import "./Login.css"
import { toast } from 'react-toastify';
export default function Login() {
document.title="Streamvid | Login"
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(userData.email, userData.password);
      toast.success("User Logged in Successfully!")
      navigate("/feed")
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("User Signin Successfully!");
      navigate("/feed");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-logo">
          <img src={logo} alt="logo" />
          {/* <h2>Streamvid</h2> */}
        </div>
        <h2 style={{marginTop:"5px"}} >Login</h2>
        <form onSubmit={onLogin}>
          <div className="login-form-div">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              placeholder="user@gmail.com"
              required
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="login-form-div">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                required
                value={userData.password}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <button className="google-login-button" onClick={handleGoogleSignIn}>
          <div>
           <img src="https://img.icons8.com/?size=96&id=17949&format=png" alt="" />
          </div>{" "}
          Continue with Google
        </button>
        <p
          className="create-new-account-link"
          onClick={() => navigate("/signup")}
        >
          Create New account 
        </p>
      </div>
    </div>
  )
}
