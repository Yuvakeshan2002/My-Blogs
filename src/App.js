import NavBar from './navbar';
import Homepage from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './notfound';

function App() {


  return (
    <Router>
      <div className="App">

        <NavBar />
        <div className="content">

          <Switch>
            
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;
