
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  video from '../assets/video.mp4'
import {Link} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        "https://students-learning-api.onrender.com/api/auth/login",
        formData
      );
      localStorage.setItem("userToken", res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data))
      navigate("/product");
    } catch (err) {
      setError(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

    
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        }}
      />

     
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "420px",
          p: 4,
          color: "#fff",
          background: "rgba(43, 41, 41, 0.52)",
            backdropFilter: "blur(10px)",
            borderRadius:'10px',
             boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 1, color: "rgba(200,200,200,0.8)" }}
        >
          WELCOME BACK
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          Log in <span style={{ color: "#2196f3" }}>.</span>
        </Typography>

        <Typography variant="body2" sx={{ mb: 3 }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#2196f3", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Stack spacing={2}>
          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined sx={{ color: "#2196f3" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
          <TextField
                      label="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined sx={{ color: "#2196f3" }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <VisibilityOff sx={{ color: "#2196f3" }} /> : <Visibility sx={{ color: "#2196f3" }} />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={textFieldStyle}
                    />

          

            
         
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
            sx={{
              py: 1.5,
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
              "Login"
            )}
          </Button>
        </Stack>


       
      </Box>

       <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=2348145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
         </div>
    </Box>
  );
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    height: "55px",
    backgroundColor: "rgba(105, 99, 99, 0.3)",
    borderRadius: "12px",
    "& fieldset": { borderColor: "rgba(105, 99, 99, 0.3)" },
    "&:hover fieldset": { borderColor: "#2196f3" },
    "&.Mui-focused fieldset": { borderColor: "#2196f3" },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "0 14px",
    height: "100%",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.7)",
  },
};

export default Login;