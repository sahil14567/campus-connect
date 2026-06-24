import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    cgpa: "",
  });

  const register = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      navigate("/student-login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="page-container">
      <div className="card-box">
        <h1 className="title">
          Student Registration
        </h1>

        <p className="subtitle">
          Create your placement account
        </p>

        <form onSubmit={register}>
          <input
            placeholder="Full Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Branch"
            onChange={(e) =>
              setForm({
                ...form,
                branch:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="CGPA"
            onChange={(e) =>
              setForm({
                ...form,
                cgpa: e.target.value,
              })
            }
          />

          <button>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;