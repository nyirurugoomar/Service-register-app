import { Suspense } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Pages/Signup';
import AccountVerification from './component/Pages/AccountVerification';
import SetPassword from './component/Pages/SetPassword';
import AuthNavbar from './component/Pages/Auth/AuthNavbar';
import NotFound404 from './component/Pages/NotFound404';

function App() {
  return (
    <>
<Router>
{/* <Navbar/> */}
<Suspense fallback={null}>
         {window.location.pathname.startsWith('/auth') ? <AuthNavbar/> : <Navbar/>}
          <Switch>  
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/auth/signup' component={Signup}/>
          <Route path='/accountVerification' component={AccountVerification}/>
          <Route path='/setPassword' component={SetPassword}/>
          <Route path='/auth/authNavbar' component={AuthNavbar}/>  
          <Route path="*" component={NotFound404} />
          </Switch>


        <Footer/>
    </Suspense>
</Router>
    
    
    </>
  );
}

export default App;
