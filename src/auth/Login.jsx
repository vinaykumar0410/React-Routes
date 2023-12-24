import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  return (
    <>
      <h1 style={{margin:'1rem'}}>Login Page</h1>
      <br />
      UserName{" "}
      <input
        style={{padding:'0.3rem',borderRadius:'0.5rem',textAlign: "left",fontSize:'1rem',marginRight:'0.5rem'}}
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="Enter User Name"
        onChange={(e) => setName(e.target.value)}
        
      />
      <button
        onClick={() => {
          login(name);
          navigate("/", { replace: true });
        }}
        style={{padding:'0.3rem',borderRadius:'0.5rem',fontSize:'1rem',cursor:'pointer'}}
      >
        Login
      </button>
    </>
  );
};

export default Login;
