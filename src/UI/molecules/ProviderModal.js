import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

function ProviderModal({
  isOpen,
  onClose,
  provider,
  isEditing,
  onSave,
  errors,
}) {
  const [localProvider, setLocalProvider] = useState({});

  useEffect(() => {
    setLocalProvider(provider);
  }, [provider]);

  const handleFieldChange = (field, value) => {    
    setLocalProvider((prevProvider) => ({
      ...prevProvider,
      [field]: value,
    }));
  };

  const handleOnsubmit = async (event) => {
    event.preventDefault();
    const result = await onSave(localProvider);    
    if (result) {
      onClose();
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
        }}
      >
        <form onSubmit={handleOnsubmit}>
          <Typography variant="h5" gutterBottom>
            {isEditing ? "Editar Proveedor" : "Crear Nuevo Proveedor"}
          </Typography>
          <TextField
            required
            fullWidth
            label="Nombre Completo"
            variant="outlined"
            margin="normal"
            value={localProvider.fullName}
            onChange={(e) => handleFieldChange("fullName", e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={localProvider.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
          <Typography variant="h6" gutterBottom color={'red'}>
            {errors}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", marginLeft: "10px" }}
            type="submit"
          >
            {isEditing ? "Guardar Cambios" : "Crear Proveedor"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default ProviderModal;
