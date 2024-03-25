import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import  Login from './Pages/Login';
import Register from './Pages/Register';
import { UserContext, UserContextProvider } from './Components/UserContext';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <main>
      <UserContextProvider>
   <BrowserRouter>
   {/* <Header/> */}
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
   </UserContextProvider>
    
    </main>
  )
}

export default App