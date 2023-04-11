import { Suspense } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Pages/Signup';
import AccountVerification from './component/Pages/AccountVerification';
import SetPassword from './component/Pages/SetPassword';



function App() {
  return (
    <>
<Router>
<Suspense fallback={null}>
      <Navbar/>
          <Switch>
            
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/accountVerification' component={AccountVerification}/>
          <Route path='/setPassword' component={SetPassword}/>
          

          </Switch>
        <Footer/>
    </Suspense>
</Router>
    
    
    </>
  );
}

export default App;
