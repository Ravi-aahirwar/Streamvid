import React, { Suspense, lazy, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "./App.css"
import "react-toastify/dist/ReactToastify.css";

// import Login from './pages/login/Login'
// import Feed from './pages/feed-page/Feed'
// import SignUp from './pages/signup/SignUp'
// import Home from './pages/home/Home'
// import VideoDetail from './components/video-detail/VideoDetail'
// import ChannelDetail from './components/channel-detail/ChannelDetail'
// import SearchFeed from './components/search-feed/SearchFeed'

import Loader from './components/Loader';

// import ClipLoader from 'react-spinners/ClipLoader';

const Login = lazy(() => wait(2000).then(() => import('./pages/login/Login')));
const Feed = lazy(() => wait(2000).then(() => import('./pages/feed-page/Feed')));
const SignUp = lazy(() => wait(2000).then(() => import('./pages/signup/SignUp')));
const Home = lazy(() => wait(2000).then(() => import('./pages/home/Home')));
const VideoDetail = lazy(() => wait(2000).then(() => import('./components/video-detail/VideoDetail')));
const ChannelDetail = lazy(() => wait(2000).then(() => import('./components/channel-detail/ChannelDetail')));
const SearchFeed = lazy(() => wait(2000).then(() => import('./components/search-feed/SearchFeed')));

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export default function App() {

  return (
    <div className='App' >
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route exact path='/feed' element={<Feed />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchterm' element={<SearchFeed />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position='top-right'
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div >
  )
}
