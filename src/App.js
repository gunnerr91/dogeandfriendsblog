import Home from "./Home";
import NavBar from "./Navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default App;
