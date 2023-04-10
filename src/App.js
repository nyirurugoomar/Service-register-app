import { Suspense } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Pages/Signup';



function App() {
  return (
    <>
<Router>
<Suspense fallback={null}>
      <Navbar/>
          <Switch>
            
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          
          </Switch>
        <Footer/>
    </Suspense>
</Router>
    
    
    </>
  );
}

export default App;
