import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
