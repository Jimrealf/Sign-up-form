import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (firstName.trim() === "") {
      errors.firstName = "First Name cannot be empty";
    }
    if (lastName.trim() === "") {
      errors.lastName = "Last Name cannot be empty";
    }
    if (email.trim() === "") {
      errors.email = "Email address is required";
    } else {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
        errors.email = "Looks like this is not an email";
      }
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      setErrors(errors);
    }
  };

  return (
    <main>
      <div className="content">
        <h1 className="content-head">Learn to code by watching others</h1>
        <p className="content-text">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="form-content">
        <h2 className="form-head">
          Try it free 7 days{" "}
          <span className="light">then $20/mo. thereafter</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          {errors && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          {errors && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          {errors && errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {errors && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p className="form-text">
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default App;
