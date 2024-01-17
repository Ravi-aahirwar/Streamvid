import React, { useState, useContext } from 'react'
import logo from '../../assests/logo.svg'
import "./Navbar.css"
import { Search } from '@mui/icons-material'
import { ExitToApp } from '@mui/icons-material'
import userImg from '../../assests/user-img.png'
import { AuthContext } from '../../contexts/AuthContexts'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogout = () => {
        logOut();
        toast.success("Guest Logged out!")
        navigate("/login");
    }

    const [icons, setIcons] = useState(true);
    const handleClicked = () => {
        setIcons(false)
    }

    // search filter
    const [searchterm, setSearchterm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchterm) {
            navigate(`/search/${searchterm}`);
            // setSearchterm("");
        }
    }

    return (
        <div className='navbar-container'>
            <div id="start" >
                <Link to="/feed">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div id='search'>
                <form onSubmit={handleSubmit}>
                    <div id='input-div' className="container">
                        {
                            !icons ? (
                                <div className="icon">
                                    <Search />
                                </div>
                            ) : null
                        }
                        <input type="text"
                            value={searchterm}
                            onChange={(e) => setSearchterm(e.target.value)} placeholder='Search...' onClick={handleClicked} />
                        <div className='search-icon' onClick={handleSubmit}>
                            <Search />
                        </div>
                    </div>
                </form>
            </div>
            <div id='end'>
                <div className="container">
                    <div className="user-img">
                        <img src={user.photoURL ? user.photoURL : userImg} alt="user" />
                    </div>
                    <div className="log-out" onClick={handleLogout}>
                        <ExitToApp />
                    </div>
                </div>
            </div>
        </div>
    )
}
