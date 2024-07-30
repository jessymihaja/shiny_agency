import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
import Error from './components/Error'
import Resultats from './pages/Resultats'
import Freelance from './pages/Freelance'
import Footer from './components/Footer'
import { ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'
import ProfileContainer from './components/ProfileContainer'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />}>
            <Route path="client/:questionNumber" element={<ClientForm/>}/>
            <Route path="freelance" element={<FreelanceForm/>}/>
          </Route>
          <Route path="*"  element={<Error/>}/>
          <Route path="/client/resultats" element={<Resultats/>}></Route>
          <Route path="/profils" element={<Freelance/>}></Route>
          <Route path="/profile/:id" element={<ProfileContainer />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)