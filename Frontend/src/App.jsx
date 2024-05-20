import { useState } from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'


import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import ExplorePage from './ExplorePage'
import LikesPage from './LikesPage'
import Slidebar from './components/Slidebar'
import Home from './Home'

import { useAuthContext } from "./context/AuthContext";

// juhyduya

function App() {
  const { authUser,loading} = useAuthContext();
	console.log("Authenticated user:", authUser);
 if(loading) return null;
  return (
    <div className='flex text-white' >
      <Slidebar/>
      <div className='max-w-5xl my-5 text-white mx-aut duration-300 flex-1 transition-all'>
        <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/login' element={!authUser ? <LoginPage/> : <Navigate to={"/"}/>}/>
      <Route  path='/signup' element={!authUser ? <SignupPage/> : <Navigate to={"/"}/>}/>
     <Route path='/Explore' element={authUser ? <ExplorePage/> : <Navigate to={"login"}/>}/>
      <Route path='/likes' element={authUser ? <LikesPage/> : <Navigate to={"login"}/>}/>
        </Routes>
      
        
      </div>
     
    </div>
  )
}

export default App
