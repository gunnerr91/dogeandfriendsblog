import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import NavBar from "./Navbar";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
