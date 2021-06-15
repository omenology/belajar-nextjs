import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

import { Card, TextField, Button } from "@material-ui/core";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(6).max(12).required(),
}).options({ stripUnknown: true });

const Login = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Card style={{ width: 400, height: 300 }}>
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <div style={{ padding: "0px 25px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("email")}
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                style={{ marginBottom: 8 }}
                helperText={errors?.email?.message}
                error={errors?.email ? true : false}
              />
              <TextField
                {...register("password")}
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                helperText={errors?.password?.message}
                error={errors?.password ? true : false}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                style={{ marginTop: 25 }}
              >
                Login
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Login;
