import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Stack,
  CircularProgress,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import { EmojiEvents, Visibility, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const api = "https://students-learning-api.onrender.com/api/auth";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(api);
        setUsers(res.data);
      } catch (error) {
        console.error(error);
        setError(error?.message || "Failed to load users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = async (_id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/auth/delete/${_id}`);
      setUsers(users.filter((u) => u._id !== _id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
         backgroundSize: "cover",
        alignItems: "flex-start",
        backgroundImage: "url('/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890 (2).jpg')",
        p: 3,
        pt: 6,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 4,
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            gap: 1,
          }}
        >
          <EmojiEvents sx={{ fontSize: 40, color: "#fbc02d" }} />
          <Typography variant="h4" fontWeight="bold">
            Reward Winning List
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress size={40} />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : users.length === 0 ? (
          <Typography align="center">No users found</Typography>
        ) : (
          <Stack spacing={2}>
            {users.map((user) => (
              <Paper
                key={user._id}
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                    {user.firstName[0].toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography fontWeight="bold">
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>

                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    startIcon={<Visibility />}
                    onClick={() => navigate(`/ViewUsers/${user._id}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    startIcon={<EmojiEvents />}
                    disabled
                  >
                    Award
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </Paper>
            ))}
          </Stack>
        )}
      </Paper>
    </Box>
  );
};

export default UsersList;
