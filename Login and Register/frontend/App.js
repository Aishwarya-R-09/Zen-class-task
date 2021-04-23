import './App.css';
import { BrowserRouter,Switch,Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register"
function App() {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;