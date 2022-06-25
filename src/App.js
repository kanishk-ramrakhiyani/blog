// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home.js";
import Createpost from "./pages/Createpost.js";
import Login from "./pages/Login.js";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <button onClick={signUserOut}>Logout</button>
              <Link to="/createpost">Createpost</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/createpost" element={<Createpost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
