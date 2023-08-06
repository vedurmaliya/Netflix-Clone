import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/signup" element={<SignUp />} />

          <Route exact path="/login" element={<Login />} />

          <Route
            exact
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
