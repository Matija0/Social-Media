import { Route, Routes } from "react-router";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import UserProfile from "./pages/Profile/UserProfile";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,

    },
  },
});
function App() {
  const token = window.localStorage.getItem("token")


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {token ? (<Navbar />) : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
