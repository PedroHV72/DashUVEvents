import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import Login from "./pages/Login"
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard';

export default function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      {user ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </Router>
  )
}
