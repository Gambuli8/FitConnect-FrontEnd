/* eslint-disable no-unused-vars */
import { Route, Routes, Outlet } from "react-router-dom";
import Actividades from "./views/Actividades/Actividades";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SingIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import DetailCart from "./components/Carrito/detailCart";
import Account from "./components/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
import AdminDashboard from "./views/AdminDashboard/AdminDashboard";

// const Home = lazy(() => import("./views/Home/Home"));
// const AdminDashboard = lazy(() => import("./views/AdminDashboard/AdminDashboard"));
// const Actividades = lazy(() => import("./views/Actividades/Actividades"));
// const SignIn = lazy(() => import("./components/SingIn/SignIn"));
// const SignUp = lazy(() => import("./components/SignUp/SignUp"));
// const DetailCart = lazy(() => import("./components/Carrito/detailCart"));
// const Account = lazy(() => import("./components/Account/Account"));
// const Footer = lazy(() => import("./components/Footer/Footer"));

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
