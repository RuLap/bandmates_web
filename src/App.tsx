import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import { Suspense } from 'react';

function App() {
  return (
    <>
      <NavBar />
      <Footer />
      <Routes>
        <Route path='/' element={ < HomePage /> }/>
        <Route path='/login' element={ < LoginPage /> }/>
        <Route path='/register' element={ < RegisterPage /> }/>
      </Routes>
    </>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
