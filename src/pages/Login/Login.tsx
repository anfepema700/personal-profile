import { useEffect } from "react";
import FormLogin from "./components/FormLogin";
import "./styles/login.css";
function Login(): JSX.Element {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className="grid background-image text-white">
      <div className="col-12 sm:col-8 text-center bg-gray-600 ">
        <h2>Acceso perfil personal</h2>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
