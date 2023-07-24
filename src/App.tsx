import React from "react";
import profilePicturePNG from "./assets/IMG_2714.png";

import "./App.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import {
  AppBar,
  Card,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Toolbar,
} from "@mui/material";

const pages = ["About", "Contact"];
const settings = ["About", "Account", "Dashboard", "Logout"];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ height: "4000px" }}>
      <AppBar position="static">
        <Container maxWidth="xl" className="bg-black">
          <Toolbar disableGutters className="bg-black justify-between">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className="text-white font-bold pr-10"
            >
              Pedro Correia Pastorini
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    className="bg-slate-500"
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Stack className="mt-4">
        <Card sx={{ backgroundColor: "black" }}>
          <img
            src={profilePicturePNG}
            alt={"prifile_picture"}
            className="h-2/3 absolute self-start rounded-full"
          />
          <Paper elevation={3} />
        </Card>
      </Stack>
    </Box>
  );
}

export default App;
