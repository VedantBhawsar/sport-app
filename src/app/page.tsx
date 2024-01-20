"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [sport, setSport] = useState("");
  const router = useRouter();
  const handleChange = (event: SelectChangeEvent) => {
    setSport(event.target.value);
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
      <Select
        value={sport}
        label="Sport"
        onChange={handleChange}
        variant="outlined"
        sx={{}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Football</MenuItem>
        <MenuItem value={20}>Boxing</MenuItem>
        <MenuItem value={30}>Cricket</MenuItem>
      </Select>
      <Button
        variant="contained"
        sx={{
          maxWidth: "fit-content",
        }}
      >
        Search
      </Button>
      <Typography variant="button" color={"black"}>
        Results
      </Typography>
      <Stack gap={2}>
        {Array(10)
          .fill("")
          .map((_, index) => {
            return (
              <Card key={index} sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Football
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    all day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    11:00 - 12:30 PM
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="text"
                    sx={{
                      borderRadius: 50,
                    }}
                    onClick={() => {
                      router.push("/sport/1");
                    }}
                  >
                    Go to
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </Stack>
    </Stack>
  );
}
