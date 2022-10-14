import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import Login from "./pages/Login"
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';

export default function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      {/* {user ? (
        <Dashboard />
      ) : (
        <Login />
      )} */}
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Login />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  )
}
