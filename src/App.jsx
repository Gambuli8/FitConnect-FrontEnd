/* eslint-disable no-unused-vars */
import { Route, Routes, Outlet } from "react-router-dom";
import Actividades from "./views/Actividades/Actividades";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SingIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import DetailCart from "./components/Carrito/detailCart";
import DetailExtraAct from "./views/detailExtraAct/detailExtraAct";
import Account from "./components/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
import AdminDashboard from "./views/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div>
        <AuthContextProvider>
      <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}/>
            <Route path="/actividades" element={<Actividades />} />
            <Route path= "/detailExtraAct/:id" element={<DetailExtraAct />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/carrito/:id" element={<DetailCart />} />
            <Route path="/account" element={<ProtectedRoute> <Account /> </ProtectedRoute>}/>
          </Routes>
      </CartContextProvider>
        <section id="contacto">
          <Footer />
        </section>
        </AuthContextProvider>
          {/* <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
          </Suspense> */}
    </div>
  );
}

export default App;
