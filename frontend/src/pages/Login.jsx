import { useState } from "react";
import {
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminLogin =
    location.pathname === "/admin-login";

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      const user = res.data.user;

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/job");
      }
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="page-container">
      <div className="card-box">
        <h1 className="title">
          🎓 Campus Connect
        </h1>

        <p className="subtitle">
          {isAdminLogin
            ? "Admin Portal Login"
            : "Student Portal Login"}
        </p>

        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Login
          </button>
        </form>

        {!isAdminLogin && (
          <Link
            className="link"
            to="/register"
          >
            Register
          </Link>
        )}

        <Link className="link" to="/">
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Login;