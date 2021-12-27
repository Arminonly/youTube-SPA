import React from 'react'
import logo from './logo.svg'
import './App.css'

import LoginPage from './pages/LoginPage'
import SearchInput from './pages/SearchInput'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Fragment } from 'react/cjs/react.production.min'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Wellcome to A State of Trance</h2>
      </header>
      <div>
        <Fragment>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/SearchInput" element={<SearchInput />} />
            </Routes>
          </Router>
        </Fragment>
      </div>
    </div>
  )
}

export default App
