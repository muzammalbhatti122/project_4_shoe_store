


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navBar/navBar';
import { Section } from './components/section/section';
import { Detail } from './components/detail/detail';
import {Footer} from './components/footer/footer'
import { AllCards } from './components/allcards/allcards';
import { AddTocart } from './components/adTocart/adTocart';
import { AdminPanal } from './components/adminPanal/adminpanal';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
    
      
         <Routes>

            <Route path={'/'} element={<Section></Section>}></Route>
            <Route path={'/detail/:id'} element={<Detail></Detail>}></Route>
            <Route path={'/allCards'} element={<AllCards></AllCards>}></Route>
            <Route path={'/addtocart'} element={<AddTocart></AddTocart>}></Route>
            <Route path={'/admin'} element={<AdminPanal></AdminPanal>}></Route>
            <Route path={'/login'} element={<Login></Login>}></Route>
            <Route path={'/signup'} element={<Signup></Signup>}></Route>


         </Routes>
      
         <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
