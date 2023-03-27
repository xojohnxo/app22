import '../css/page/login.css'
import { useState, useEffect} from "react";
import { user } from '../dummyData';


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const errors = {
        username: "Wrong username",
        password: "Wrong password",
    };
    
    const currentUser = user.find((user) => user.username === username);
    
      useEffect(() => {
        if (!!currentUser) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            username: errors.username,
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            username: '',
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
            password: '',
          }));
        }
      }, [currentUser, password, username]);
    
    const handleSubmit = (e) => {
        e.preventDefault(); //no reloading
        console.log();
        setIsLoggedIn(true);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };

    const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

    return(
        <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)}
            }
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
    )
}
export default Login;
