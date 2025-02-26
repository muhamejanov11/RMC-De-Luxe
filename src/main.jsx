import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./components/header.jsx"
import Img from './components/bgImg.jsx'
import Main2 from './components/main2.jsx'
import Main3 from './components/main3.jsx'
import Main4 from './components/main4.jsx'
import Main5 from './components/main5.jsx'
import Main6 from './components/main6.jsx'
import Main7 from './components/main7.jsx'
import Main8 from './components/main8.jsx'
import Main9 from './components/main9.jsx'
import Main10 from './components/main10.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Img />
    <Main2 />
    <Main3 />
    <Main4 />
    <Main5 />
    <Main6 />
    <Main7 />
    <Main8 />
    <Main9 />
    <Main10 />
    <Footer />
  </StrictMode>,
)
