import './App.css';
import Home from './component/pages/home';
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './component/pages/admin/dashboard';
import Contact from './component/pages/contact';
import AdminDhash from './component/pages/admin/adminDash';
import Order from './component/pages/admin/order';
import Details from './component/pages/Details';
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const datas = useSelector(state => state.menuReducer.datas)
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/"><Home/></Route>
      <Route exact path="/dashboard" ><AdminDhash/></Route>
      <Route exact path="/product"><Dashboard/></Route>
      <Route exact path="/order"><Order/></Route>
      <Route exact path="/details/:id">
        <Details  />
      </Route>
      <Route exact path="/contact"><Contact/></Route>
     
      </BrowserRouter>
   
    </div>
  );
}

export default App;
