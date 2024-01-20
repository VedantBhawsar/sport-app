"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
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

export default function AccountPage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(newUser);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      sx={{
        height: "93%",
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
      <Stack justifyContent={"space-between"} height={"100%"}>
        <Box
          sx={{
            display: "flex",
            height: "100px",
            borderRadius: 2,
            border: "1px solid gray",
            alignItems: "center",
            gap: 5,
            p: 3,
          }}
        >
          <Avatar variant="rounded" sx={{ width: 56, height: 56 }}>
            VB
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" color={"black"}>
              Vedant Bhavsar
            </Typography>
            <Typography variant="subtitle1" color={"gray"}>
              Email:
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            paddingY: 2,
          }}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
}
