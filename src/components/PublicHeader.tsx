import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PublicHeader() {
  const navigate = useNavigate();  // Usar useNavigate aquí para habilitar la navegación

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/022/791/223/small/blog-site-blogger-png.png" alt="logo" width="32" />
          <Typography variant="h6">BlogApp</Typography>
        </Box>

        <Box display="flex" gap={2}>
          <button className="btn btn-ghost" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn-ghost" onClick={() => navigate('/register')}>Register</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
