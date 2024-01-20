"use client";
import { PriceTable, TimingTable } from "@/components/tableComponent";
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

export default function SportPage() {
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
      <Typography variant="h6" color={"black"}>
        Cricket
      </Typography>
      <Typography variant="button" color={"black"}>
        About
      </Typography>
      <Typography variant="body1" color={"black"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eligendi
        nostrum nesciunt dignissimos, eum eveniet, necessitatibus fugiat amet
        cumque ab commodi aliquid, similique veritatis repellat quas aut
        possimus odio velit. dignissimos, eum eveniet, necessitatibus fugiat
        amet cumque ab commodi aliquid, similique veritatis repellat quas aut
        possimus odio velit. dignissimos, eum eveniet, necessitatibus fugiat
        amet cumque ab commodi aliquid, similique veritatis repellat quas aut
        possimus odio velit.
      </Typography>
      <Stack gap={2}>
        <Typography variant="h6" color={"black"}>
          Time Table
        </Typography>
        <TimingTable />
        <Typography variant="h6" color={"black"}>
          Price Table
        </Typography>
        <PriceTable />
        <Button
          variant="contained"
          sx={{
            py: 1.5,
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
        >
          BUY
        </Button>
      </Stack>
    </Stack>
  );
}
