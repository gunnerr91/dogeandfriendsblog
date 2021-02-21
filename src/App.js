import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import NavBar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
