import { useEffect } from "react";
import FormLogin from "./components/FormLogin";
import "./styles/login.css";
function Login(): JSX.Element {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className="grid background-image">
      <div className="col-4 sm:col-8 form-login text-center">
        <h2>Acceso perfil personal</h2>
        <h5>Centro Espiritual Imandade Servos De Jesús</h5>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
