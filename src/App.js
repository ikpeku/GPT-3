import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar, NotFound } from "./component";
import { Home, Login, Signup } from "./pages";
import { useUserAuth } from "./hooks/useUserAuth";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FooterSection } from "./pages/HomeSection";

function App() {
  const {user} = useUserAuth()
  return (
    <div className="max-w-screen-2xl p-4 sm:p-8 mx-auto">
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="/login" element={!user ? <Login/> : <Navigate to="/" replace />} />
        <Route path="/signup" element={ !user ? <Signup/> : <Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <FooterSection />
      <ToastContainer />
   
    </div>
  );
}

export default App;
