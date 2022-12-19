import { Route, Routes } from "react-router-dom";
import { Navbar, NotFound } from "./component";
import { Login, Signup } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />

        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
   
    </div>
  );
}

export default App;
