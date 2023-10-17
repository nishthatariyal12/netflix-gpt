import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../screens/Login';
import Browse from '../screens/Browse';
import SignUp from '../screens/SignUp';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { adduser, removeUser } from '../utils/userSlice';
function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email ,displayName} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
         
      } else {
        dispatch(removeUser());
        
      }
    });
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
}

export default App;
