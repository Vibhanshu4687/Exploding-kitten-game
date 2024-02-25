import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Board from './Board';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { fetchHighscore, setUser } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');
    const userJson = JSON.parse(localStorageUser);
    if (userJson) {
      dispatch(setUser(userJson));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchHighscore());
  }, [dispatch]);

  const user = useSelector(state => state.user.user);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Navigate to="/signup" /> : <Board />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
