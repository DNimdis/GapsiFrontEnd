import { Container } from '@mui/material';
import React from 'react';
import { ProviderListTemplate } from '../UI/template';
import { Header } from '../UI/organisms';

const Dashboard = () => {
    return (
        <>
        <Header />
        <Container maxWidth="md">            
            <ProviderListTemplate />
        </Container>
        </>
    );
};

export default Dashboard;