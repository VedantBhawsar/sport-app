"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function RegisterPage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "primary.contrastText",
        padding: "1rem",
        gap: "20px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h4" color={"black"}>
        Sport App
      </Typography>
      <Typography variant="h6" color={"black"}>
        Register
      </Typography>
      <Stack gap={2}>
        <TextField
          value={newUser.name}
          onChange={(event) =>
            setNewUser((prev) => {
              return { ...prev, name: event.target.value };
            })
          }
          placeholder="Enter Name"
          type="text"
          variant="outlined"
        />{" "}
        <TextField
          value={newUser.email}
          onChange={(event) =>
            setNewUser((prev) => {
              return { ...prev, email: event.target.value };
            })
          }
          placeholder="Enter Email"
          type="email"
          variant="outlined"
        />
        <OutlinedInput
          value={newUser.password}
          onChange={(event) =>
            setNewUser((prev) => {
              return { ...prev, password: event.target.value };
            })
          }
          placeholder="Enter Password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          variant="contained"
          sx={{
            py: 1.5,
            maxWidth: "fit-content",
          }}
        >
          Create account
        </Button>
      </Stack>
    </Stack>
  );
}
