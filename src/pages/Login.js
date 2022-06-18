import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { TextField } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await auth.signin({ email, password }, () => {
        setTimeout(() => navigate(from, { replace: true }), 2000);
      });
    } catch (e) {
      toast.error("Ошибка!");
      setError(e);
      console.error(e);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Логин</h1>
        <p>Введите почту и пароль для авторизации</p>
        <div>
          <TextField
            placeholder="Введите почту"
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        <br />
        <br />
        <div>
          <TextField
            placeholder="Введите ваш пароль"
            name="password"
            type="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <br />
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
