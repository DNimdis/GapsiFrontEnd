import React, { useState, useEffect } from 'react';
import {
  Container,
  Stack,
  Pagination,
  Button,
} from '@mui/material';
import GapsiAPI from '../../services/GapsiAPI';
import { ProviderModal, ProviderTable } from '../molecules';

function ProviderListTemplate() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({ id: '', fullName: '', email: '', image: 'demodemo' });
  const [isEditing, setIsEditing] = useState(false);
  const [providers, setProviders] = useState([]);
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(0);
  const [errors, setError] = useState(null);

  useEffect(() => {
   
    fetchDataTotalPage();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]); // Dependencias actualizadas
  const fetchData = async () => {
    try {
      const request = await GapsiAPI.getAllProvider({ page, pageSize: 10 });
      const response = await request.json();
      if (response.status === 200) {
        setProviders(response.providers);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  async function fetchDataTotalPage() {
    try {
      const request = await GapsiAPI.getTotalPages();
      const response = await request.json();
      if (response.status === 200) {
        setTotalPages(response.pages);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleEditProvider = (provider) => {    
    setSelectedProvider(provider);
    setIsEditing(true);
    setIsOpen(true);
  };

  const handleDeleteProvider = async (id) => {
    try {
      const request = await GapsiAPI.deleteProvider(id);
      const response = await request.json();
      if (response.status === 200) {        
        fetchDataTotalPage();
        fetchData();
      } else {
        console.error('Error deleting provider:', response.error);
      }
    } catch (error) {
      console.error('Error deleting provider:', error);
    }
  };

  const handleSaveProvider = async (updatedProvider) => {    
    try {
      const request = isEditing
        ? await GapsiAPI.updateProvider(updatedProvider.id, updatedProvider)
        : await GapsiAPI.createProvider(updatedProvider);

      const response = await request.json();
      if (response.status === 200) {
        if (isEditing) {
          const updatedProviders = providers.map((provider) =>
            provider.id === updatedProvider.id ? response.provider : provider
          );
          setProviders(updatedProviders);
        } else {
          setProviders([...providers, response.provider]);
          fetchData();
          fetchDataTotalPage();
        }
        setIsOpen(false);
        setSelectedProvider({ ...selectedProvider, id: '', fullName: '' });
        setIsEditing(false);
        
        return true;
      } else { 
        let error=response.message;          
        if(response.errors){
            error=response.errors.pop().value;
        }
        setError(error);
        console.error('Error saving provider:', response.error);
        return false;
      }
    } catch (error) {
      console.error('Error saving provider:', error);
    }
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedProvider({ ...selectedProvider, id: '', fullName: '', email: '' });
    setIsEditing(false);
    setError(null)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  
  return (
    <Container maxWidth="md">
      <Stack spacing={2} alignItems="flex-end" marginTop={'1em'}>
        <Button variant="contained" color="primary" onClick={() => setIsOpen(true)}>
          Agregar Proveedor
        </Button>
        <ProviderTable providers={providers} onEdit={handleEditProvider} onDelete={handleDeleteProvider} />
        {totalPages > 1 && (
          <Pagination
            defaultChecked={1}
            onChange={handleChangePage}
            count={totalPages}
            size="small"
            page={page}
          />
        )}
      </Stack>
      <ProviderModal isOpen={isOpen} onClose={handleModalClose} provider={selectedProvider} isEditing={isEditing} onSave={handleSaveProvider} errors={errors} />
    </Container>
  );
}

export default ProviderListTemplate;
