import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import {
  Card,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Link,
} from "@mui/material";

export default function LoginForm() {
  return (
    <>
      <Box sx={{ marginBottom: '2rem' }}>
        <img src="/logo-demo.png" alt="logo" />
      </Box>
      <Card sx={{ width: "500px", padding: "2.5rem", marginBottom: '4rem' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "0.6rem",
            color: "darkText.default",
          }}
          color="darkText"
        >
          Welcome Back
        </Typography>
        <Typography sx={{ textAlign: "center", marginBottom: "3.5rem" }} color="lightText.default">
          Enter yor credentials to access your account
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
          <TextField
            fullWidth
            placeholder="Enter your email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="Enter your password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />

          <Button fullWidth variant="contained" size="large">
            Sign In
          </Button>
        </Box>
      </Card>
      <Box>
        {'Forgot yor password? '}
        <Link>Reset here</Link>
      </Box>
    </>
  );
}
