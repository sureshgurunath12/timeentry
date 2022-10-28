import React from 'react';

const Login = () => {
  
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formValue;
    if (email && email.trim() && password && password.trim()) {
      localStorage.setItem('token', '123');
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Login to Get Started</p>
      <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button
        color="primary"
        type="submit"
      >
        Login
      </button>
    </form>
  )
};

export default Login;