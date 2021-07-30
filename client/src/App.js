import './App.css';
import Home from './component/pages/home';
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './component/pages/admin/dashboard';
import Contact from './component/pages/contact';
import Panier from './component/pages/panier';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/"><Home/></Route>
      <Route exact path="/dashboard" ><Dashboard/></Route>
      <Route exact path="/contact"><Contact/></Route>
     
      </BrowserRouter>
   
    </div>
  );
}

export default App;
