import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Icons
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/",
        formData
      );
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890 (2).jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        },
      }}
    >
      <Box
        component="form"
        onSubmit={handleRegister}
        sx={{
          position: "center",
          zIndex: 1,
          width: "600px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 1, color: "rgba(200,200,200,0.8)" }}
        >
       
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          Create new account<span style={{ color: "#2196f3" }}>.</span>
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Already has an account?{" "}
          <span
            style={{ color: "#2196f3", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            ⚠️ {error}
          </Typography>
        )}

        {/* Flex row 1: First name / Last name */}
        <Box sx={{ display: "flex", gap: 7 }}>
          <TextField
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
          <TextField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
        </Box>

        {/* Flex row 2: Email / Phone */}
        <Box sx={{ display: "flex", gap: 7  }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
          <TextField
            label="Phone number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneOutlinedIcon sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
        </Box>

        {/* Flex row 3: Password / Address */}
        <Box sx={{ display: "flex", gap: 7 }}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlinedIcon sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{
            py: 1.5,
            mt: 1,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            backgroundColor: "#2196f3",
            "&:hover": { backgroundColor: "#1a75d1" },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            "Create account"
          )}
        </Button>
      </Box>
    </Box>
  );
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    height: "55px",              // increase the height
    backgroundColor: "rgba(255,255,255,0.08)", 
    borderRadius: "12px",
    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
    "&:hover fieldset": { borderColor: "#2196f3" },
    "&.Mui-focused fieldset": { borderColor: "#2196f3" },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "0 14px",           // keep text nicely inside
    height: "100%",               // make text vertically centered
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
};


export default RegistrationScreen;
