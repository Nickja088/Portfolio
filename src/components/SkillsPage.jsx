import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        color: "#61dafb",
        level: 4,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "JavaScript",
        color: "#f7df1e",
        level: 4,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "HTML5",
        color: "#e44d26",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "CSS3",
        color: "#1572b6",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "Material UI",
        color: "#007fff",
        level: 4,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            alt="Material UI"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      {
        name: "Node.js",
        color: "#3c873a",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "Express.js",
        color: "#000",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
            style={{ width: 24, height: 24, marginRight: 8, background: "#fff", borderRadius: 4 }}
          />
        ),
      },
      {
        name: "MySQL",
        color: "#00758f",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "Git",
        color: "#f34f29",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "IT Support",
        color: "#00e676",
        level: 4,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
            alt="IT Support"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "Network",
        color: "#00bcd4",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg"
            alt="Network"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "Photoshop",
        color: "#31a8ff",
        level: 3,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            alt="Photoshop"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      {
        name: "Premiere Pro",
        color: "#a259ff",
        level: 2,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg"
            alt="Premiere Pro"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
    ],
  },
];

const SkillsPage = () => (
  <Box
    sx={{
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/geometry2.png")',
      backgroundColor: "rgb(24, 24, 26)",
      backgroundRepeat: "repeat",
      py: { xs: 6, md: 10 },
    }}
  >
    <Container maxWidth="xl">
      <Typography
        variant="h2"
        color="white"
        textAlign="center"
        gutterBottom
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: "bold",
          letterSpacing: 2,
          mb: 4,
        }}
      >
        ทักษะของฉัน
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skillGroups.map((group, idx) => (
          <Grid item xs={12} key={idx}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: "28px",
                background: "rgba(0,0,0,0.85)",
                minHeight: 120,
                mb: 3,
              }}
            >
              <Typography
                variant="h5"
                color="white"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  borderBottom: "2px solid #0073E6",
                  pb: 1,
                  letterSpacing: 1,
                }}
              >
                {group.title}
              </Typography>
              <Grid container spacing={2}>
                {group.skills.map((skill, i) => (
                  <Grid item xs={12} md={4} key={i}>
                    <Box
                      sx={{
                        px: 2,
                        py: 0.5,
                        borderRadius: "16px",
                        background: skill.bg || "rgba(255,255,255,0.08)",
                        color: skill.color,
                        fontWeight: 500,
                        fontSize: { xs: "15px", md: "17px" },
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        minWidth: 120,
                      }}
                    >
                      {skill.icon}
                      {skill.name}
                      <Box sx={{ ml: 1, display: "flex", alignItems: "center" }}>
                        {[1, 2, 3, 4, 5].map((level) => (
                          <Box
                            key={level}
                            sx={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              backgroundColor: level <= skill.level ? "#ffd600" : "#555",
                              mx: "1px",
                              display: "inline-block",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default SkillsPage;
