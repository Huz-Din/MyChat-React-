import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../services/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    // вот здесь делаем валидацию пароля (проверяем e)
    // const value = e.target.value;
    // if(test.value)
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(firebaseConfig);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Пользователь зарегистрирован!");
      setEmail("");
      setPassword("");
    } catch (e) {
      toast.error("Ошибка регистрации");
      console.error(e);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <br />
        <h1>Регистрация</h1>
        <TextField
          placeholder="Введите почту"
          name="email"
          type="email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <br />
        <br />
        <br />
        <TextField
          placeholder="Введите пароль"
          name="password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <br />
        <br />
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Зарегистрироваться</button>
        </div>
        <p>
          Аккаунт уже есть? <Link to={"/Login"}>Войти</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
