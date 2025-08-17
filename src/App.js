import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  GlobalStyles,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage"; 

const theme = createTheme({
  palette: {
    primary: { main: "rgb(0, 0, 0)" },
    background: { main: "rgb(0, 0, 0)" },
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
    color: "blue",
  },
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const drawerItems = [
  { label: "หน้าเเรก", href: "#about" },
  { label: "ประวัติการศึกษา", href: "#education" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ผลงาน", href: "#projects" },
  { label: "ติดต่อ", href: "#contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <HideOnScroll>
        <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1100 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              color="white"
              sx={{ flexGrow: 1, fontSize: '22px', fontWeight: 'bold' }}
            >
              NickJrz .Dev
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {drawerItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => handleMenuClick(item.href)}
                  sx={{ fontSize: "16px", color: "white" }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      >
        <List>
          {drawerItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item.href)}
                sx={{
                  width: "100%",
                  textAlign: "left",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 16,
                    sx: { color: "#fff", fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Sections */}
      <Box id="about"><AboutPage /></Box>
      <Box id="education"><EducationPage /></Box>
      <Box id="skills"><SkillsPage /></Box>
      <Box id="projects"><ProjectsPage /></Box>
      <Box id="contact"><ContactPage /></Box>
    </ThemeProvider>
  );
}

export default App;