import { useState } from "react";
import { FaTimes } from "react-icons/fa";  // Importing the close icon
import "./signup.css";

const SignUp = ({ isVisible, toggleForm }) => {
  const [authRender, setAuthRender] = useState(false);

  const handleClick = () => {
    setAuthRender((prev) => !prev);
  };

  const signUpSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">  {/* Overlay for modal background */}
      <div className="modal-container">  {/* Modal container */}
        <FaTimes className="close-icon" onClick={toggleForm} /> {/* Close icon */}
        
        {authRender ? (
          <form className="form">
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>

            <div className="input">
              <div className="input-field">
                <div>
                  <label htmlFor="firstname">First Name</label>
                </div>
                <input
                  type="text"
                  id="FirstName"
                  placeholder="First Name..."
                  required
                />
              </div>
              <div className="input-field">
                <div>
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <input
                  type="text"
                  id="LastName"
                  placeholder="Last Name..."
                  required
                />
              </div>
            </div>

            <div className="input">
              <div className="input-field" style={{ width: "100%" }}>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  style={{ width: "100%" }}
                  type="email"
                  id="email"
                  placeholder="Email..."
                  required
                />
              </div>
            </div>

            <div className="input">
              <div className="input-field" style={{ width: "100%" }}>
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  style={{ width: "100%" }}
                  type="password"
                  id="password"
                  placeholder="Password..."
                  required
                />
              </div>
            </div>

            <input
              type="checkbox"
              id="consent"
              style={{ marginTop: "10px" }}
              required
            />
            <label htmlFor="consent" style={{ padding: "1rem", gap: "20px" }}>
              I consent to being contacted by the team.
            </label>

            <p>
              Already have an account?
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={handleClick}
              >
                Log In
              </span>
            </p>

            <div className="btn">
              <button type="submit" style={{ cursor: "pointer" }}>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <form className="form" onSubmit={signUpSubmit}>
            <h1 style={{ textAlign: "center" }}>Log In</h1>

            <div className="input">
              <div className="input-field" style={{ width: "100%" }}>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  style={{ width: "100%" }}
                  type="email"
                  id="email"
                  placeholder="Email..."
                  required
                />
              </div>
            </div>

            <div className="input">
              <div className="input-field" style={{ width: "100%" }}>
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  style={{ width: "100%" }}
                  type="password"
                  id="password"
                  placeholder="Password..."
                  required
                />
              </div>
            </div>

            <p>
              Don't have an account?
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={handleClick}
              >
                Sign Up
              </span>
            </p>

            <div className="btn">
              <button type="submit" style={{ cursor: "pointer" }}>
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
