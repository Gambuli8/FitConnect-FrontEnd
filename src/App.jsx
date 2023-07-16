/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Actividades from "./views/Actividades/Actividades";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SingIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Carrito from "./components/Carrito/Carrito";
import DetailCart from "./components/Carrito/detailCart";
import Account from "./components/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartContextProvider>
      <NavBar />
      <Carrito />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/carrito/:id" element={<DetailCart />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
            />
        </Routes>
      </AuthContextProvider>
      <section id="contacto">
      <Footer />
      </section>
      </CartContextProvider>
    </div>
  );
}

export default App;
