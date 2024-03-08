import React, { useRef } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate =useNavigate()
  const emailDom = useRef(null);
  const passwordDom = useRef(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // get values from the input fields
    
    let emailValue = emailDom.current.value;
    let passValue = passwordDom.current.value;
    if (
    
      !emailValue ||
      !passValue
    ) {
      // console.log('Please provide all required information')
      return;
    }
    try {
      // const { data } = await axios.post("/users/login");
      await axios.post("/users/login",
        {
        email: emailValue,
        password: passValue,
      });
      console.log('login Successful!')
      navigate("/");
    } catch (err) {
      console.log(err.message);
      console.log("something went wrong!");
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email: </span>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>Password: </span>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* <Link Link to={'/register' }>register</Link> */}
          </section>
  );
}

export default Login;
