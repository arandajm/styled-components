import React, { useState } from "react";
import { Layout, Input, PasswordInput, Button } from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0px;
  }
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  let timeout;
  const handleInputChange = (e) => {
    e.persist();
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // After 2 seconds, loading is hidden
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <h1>Login</h1>
      <Form onSubmit={handleFormSubmit}>
        <Input
          name="username"
          placeholder="Username"
          value={formFields.username}
          type="text"
          onChange={handleInputChange}
        />

        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
        <Button large type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </Layout>
  );
};

export default Login;
