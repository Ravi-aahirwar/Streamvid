import React, { Suspense, lazy, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "./App.css"
import "react-toastify/dist/ReactToastify.css";

import Loader from './components/Loader';

const Login = lazy(() => wait(1000).then(() => import('./pages/login/Login')));
const Feed = lazy(() => wait(1000).then(() => import('./pages/feed-page/Feed')));
const SignUp = lazy(() => wait(1000).then(() => import('./pages/signup/SignUp')));
const VideoDetail = lazy(() => wait(1000).then(() => import('./components/video-detail/VideoDetail')));
const ChannelDetail = lazy(() => wait(1000).then(() => import('./components/channel-detail/ChannelDetail')));
const SearchFeed = lazy(() => wait(1000).then(() => import('./components/search-feed/SearchFeed')));

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
          <Route exact path='/' element={<Feed />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
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
