import React, { useState } from "react";
import { Layout, Input, PasswordInput } from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 11px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Layout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="username"
          value={formFields.username}
          type="text"
          onChange={handleInputChange}
        />

        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
      </Form>
    </Layout>
  );
};

export default Login;
