import { Route, Routes } from "react-router-dom";
import Actividades from "./views/Actividades/Actividades";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SingIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Steppers from "./views/Steppers/Steppers"
import Account from "./components/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <NavBar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Steppers/:membershipId" element={<Steppers />} />
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
      <Footer />
    </div>
  );
}

export default App;
