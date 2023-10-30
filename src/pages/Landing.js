import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logogapsi from "../assets/img/logo.png";
import GapsiAPI from "../services/GapsiAPI";
import { Header } from "../UI/organisms";

function Landing() {
  const [data, setData] = useState({
    candidate: "",
    version: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await GapsiAPI.getWelcome();
        const response = await request.json();
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleContinue = () => {
    // Redirige a la página del dashboard
    navigate("/dashboard");
  };

  return (
    <>
    <Header />
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        <img
          src={logogapsi}
          alt="Modal"
          style={{ maxWidth: "100%", marginBottom: "20px" }}
        />
        <Typography variant="h5" gutterBottom>
          Bienvenido {data.candidate}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Version {data.version}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleContinue}>
          Continuar
        </Button>
      </Box>
    </div>
    </>
  );
}

export default Landing;
