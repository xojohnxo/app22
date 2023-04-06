import { useState, useEffect } from "react";
import { user } from "../dummyData";
import "../css/page/login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const errors = {
    username: "Wrong username",
    password: "Wrong password",
  };

  useEffect(() => {
    if (!!currentUser) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        username: errors.username,
      }));
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        username: "",
      }));
    }

    if (currentUser && currentUser.password !== password) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: errors.password,
      }));
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  }, [currentUser, password]);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload
    setCurrentUser(user.find((user) => user.username === username));
    setIsLoggedIn(true);
    onLogin();
  };

  const renderErrorMsg = (name) =>
    name === errorMessages[name] && (
      <p className="error_msg">{errorMessages[name]}</p>
    );

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {renderErrorMsg("username")}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {renderErrorMsg("password")}
      </div>
      <input type="submit" value="Log In" className="login_button" />
    </form>
  );
}

export default Login;