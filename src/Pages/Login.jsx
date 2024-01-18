import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formSaveSuccessAction } from "../Redux/LoginForm/action";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    id: Math.random() + Date.now(),
    email: "",
    mobile: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { form } = useSelector((store) => {
    return {
      form: store.reducer.FormDat,
    };
  });
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    navigateTo(path);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(formSaveSuccessAction(userData));
    setData([...data, userData]);
    setUserData({
      id: Math.random() + Date.now(),
      email: "",
      mobile: "",
      password: "",
    });
    GoTo("/profile");
  };
  useEffect(() => {
    console.log("store", store);
  }, [data]);

  return (
    <div className="login-container">
      <Navbar />
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
