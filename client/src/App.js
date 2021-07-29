import './App.css';
import Home from './component/pages/home';
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './component/pages/admin/dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/"><Home/></Route>
      <Route  path="/admin" ><Dashboard/></Route>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
