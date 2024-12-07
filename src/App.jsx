import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import Interiors from './Pages/Interiors';
import Loan from './Pages/Loan';
import Propertylegalservice from './Pages/Propertylegalservice';
import Onlinerentservice from './Pages/Onlinerentservice';
import Sellpro from './Pages/Sellpro';
import Propertyregistration from './Pages/Propertyregistration';
import Receiptgenerator from './Pages/Receiptgenerator';
import Rentproperty from './Pages/Rentproperty';
import Valuation from './Pages/Documantation';
import Contact from './Pages/Contact';
import Packer from './Pages/Packer';
import Vastu from './Pages/Vastu';
import Homepaintings from './Pages/Homepaintings';
import Footer from './Footer/Footer';
import Postproperty from './Pages/Postproperty';
// import Listrent1 from './Pages/Listrent1';
// import Listrent2 from './Pages/Listrent2';
// import Listrent3 from './Pages/Listrent3';
import BHK1 from './Pages/BHK1';
import BHK2 from './Pages/BHK2';
import BHK3 from './Pages/BHK3';
import BHK4 from './Pages/BHK4';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/loan' element={<Loan />} />
          <Route path='/interiors' element={<Interiors />} />
          <Route path='/propertylegal' element={<Propertylegalservice />} />
          <Route path='/onlinerent' element={<Onlinerentservice />} />
          <Route path='/sellpro' element={<Sellpro />} />
          <Route path='/propertyreg' element={<Propertyregistration />} />
          <Route path='/receipt' element={< Receiptgenerator />} />
          <Route path='/rent' element={< Rentproperty />} />
          <Route path='/valuation' element={< Valuation />} />
          <Route path='/painting' element={<Homepaintings />} />
          <Route path='/packer' element={< Packer />} />
          <Route path='/vastu' element={<Vastu />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/postproperty' element={<Postproperty/>} />

          {/* <Route path='/listrent1' element={<Listrent1/>} />
          <Route path='/listrent2' element={< Listrent2/>} />
          <Route path='/listrent3' element={< Listrent3/>} /> */}

          <Route path='1bhkflat' element={< BHK1/>} />
          <Route path='2bhkflat' element={< BHK2/>} />
          <Route path='3bhkflat' element={< BHK3/>} />
          <Route path='4bhkflat' element={< BHK4/>} />
         </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App;