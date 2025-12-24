import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NewYearAnimation from './components/NewYearAnimation'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
import Sectors from './pages/Sectors'
import WorkForAmevia from './pages/WorkForAmevia'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <NewYearAnimation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/work-for-amevia" element={<WorkForAmevia />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
