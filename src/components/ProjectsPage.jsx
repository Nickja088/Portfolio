import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Button, Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: -20,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "#fff",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
      zIndex: 2,
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: -20,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "#fff",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
      zIndex: 2,
    }}
  >
    <ArrowBackIosIcon />
  </IconButton>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  swipeToSlide: true,
  responsive: [
    { breakpoint: 960, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const ProjectsPage = () => {
  const [projectGroups, setProjectGroups] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก backend
    axios.get("http://localhost:5000/api/projects/grouped")
      .then(res => setProjectGroups(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
        backgroundColor: "rgba(43, 43, 46, 1)",
        backgroundRepeat: "repeat",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{ color: "white", fontWeight: "bold", mb: 6 }}
          >
            ผลงานของฉัน
          </Typography>
        </motion.div>

        {projectGroups.map((group, idx) => (
          <Box key={idx} mb={10} position="relative">
            <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", mb: 3 }}>
              {group.groupTitle}
            </Typography>

            <Slider {...sliderSettings}>
              {group.projects.map((project, i) => (
                <Box key={i} px={3} py={2}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card
                      sx={{
                        boxShadow: 8,
                        borderRadius: 4,
                        overflow: "hidden",
                        backgroundColor: "#181817ff",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": { boxShadow: 12 },
                        gap: 2,
                      }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        style={{ height: 250, width: "100%", objectFit: "cover" }}
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom color="white">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="white" mb={2}>
                          {project.description}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#ffb300",
                            "&:hover": { backgroundColor: "#ffae19ff" },
                            borderRadius: "15px",
                            px: 3,
                          }}
                          href={project.link}
                          target="_blank"
                        >
                          View
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Slider>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default ProjectsPage;
