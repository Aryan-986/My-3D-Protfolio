import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Home, About, Contact, Experience, Feedbacks,Hero, Navbar, Works, StarsCanvas, Tech,} from './components'



const App = () => {

  return (
   <BrowserRouter>
   <Routes>
        <Route path="/#home" element={<homepage />} /> 
        {/* Add other routes for About, Contact, etc. */}
        
        {/* ... other routes */}
      </Routes>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover
    bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
   

      </div>
      <Home/>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
   </div>
   </BrowserRouter>
  )
}

export default App