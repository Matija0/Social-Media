import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Feed from "./pages/Feed/Feed";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
