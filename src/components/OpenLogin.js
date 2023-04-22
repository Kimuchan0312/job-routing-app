import { Button, Stack, Typography, IconButton, InputAdornment  } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormProvider, FTextField } from "./form";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"


const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  username: "",
  password: "",
};

function OpenLogin({jobId, onSuccess}) {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const [showPassword, setShowPassword] = useState(false); 

  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    let { username, password } = data;

    auth.login(username, password, () => {
      navigate(from, { replace: true });
      onSuccess();
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>

        <FTextField name="username" label="Username" />
        <FTextField name="password" label="Password" type={showPassword ? 'text' : 'password'} InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                    >
                        {showPassword ? <VisibilityOff/> : <Visibility /> }
                    </IconButton>
                </InputAdornment>
            )
         }}/>
        <Button type="submit" variant="contained">
          SIGN IN
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default OpenLogin;