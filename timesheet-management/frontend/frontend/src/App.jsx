import EmployeeDashboard from "./components/EmployeeDashboard";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password
          }
        );

        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        alert("Login successful!");

        console.log(response.data);

      } else {
        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            email,
            password
          }
        );

        alert(response.data.message);

        setName("");
        setEmail("");
        setPassword("");

        setIsLogin(true);
      }

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };
const savedUser = localStorage.getItem("user");

const loggedInUser = savedUser
  ? JSON.parse(savedUser)
  : null;

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.reload();
};
if (loggedInUser) {
  return (
    <EmployeeDashboard
      user={loggedInUser}
      onLogout={handleLogout}
    />
  );
}
  return (
    <div className="timesheet-app">

      <div className="background-grid"></div>

      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="content">

        <div className="card">

          <div className="logo">
            ⏱
          </div>

          <h1>
            {isLogin
              ? "Welcome Back"
              : "Timesheet Management"}
          </h1>

          <p className="subtitle">
            {isLogin
              ? "Login to manage your timesheets"
              : "Manage your work time smarter"}
          </p>

          <form onSubmit={handleSubmit}>

            {!isLogin && (
              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>
            )}

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            <button
              className="register-btn"
              type="submit"
            >
              {isLogin
                ? "Login"
                : "Create Account"}
            </button>

          </form>

          <p className="footer-text">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              className="switch-btn"
              onClick={() => {
                setIsLogin(!isLogin);
                setName("");
                setEmail("");
                setPassword("");
              }}
            >
              {isLogin ? " Register" : " Login"}
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default App;
