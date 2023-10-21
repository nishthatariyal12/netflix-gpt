import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../screens/Login';
import Browse from '../screens/Browse';
import SignUp from '../screens/SignUp';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { adduser, removeUser } from '../slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        setUser(user);
      } else {
        dispatch(removeUser());
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/browse" /> : <Login />}
        />
         <Route
          path="/signup"
          element={user ? <Navigate to="/browse" /> :<SignUp/>}
        />
        <Route
          path="/browse"
          element={user ? <Browse /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
