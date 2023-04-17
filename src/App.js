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
  
          
          
          


          {/* <Route path="/Auth/dashboard" component={DashboardPage} />
          <Route path="/Auth/users" component={UsersPage} />
          <Route path="/Auth/products" component={AdminProductsPage} />
          <Route path="/Auth/settings" component={SettingsPage} /> */}
          </Switch>
        <Footer/>
    </Suspense>
</Router>
    
    
    </>
  );
}

export default App;
