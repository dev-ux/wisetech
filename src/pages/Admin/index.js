import { Container, Box, Typography, Button, AppBar, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import { useAuth } from 'context/AuthContext';
import HeroEditor from 'components/Admin/HeroEditor';
import ServicesEditor from 'components/Admin/ServicesEditor';
import ExpertiseEditor from 'components/Admin/ExpertiseEditor';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `admin-tab-${index}`,
    'aria-controls': `admin-tabpanel-${index}`,
  };
}

const AdminPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null; // Le ProtectedRoute gérera la redirection
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Administration
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Déconnexion
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ py: 2, flex: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tableau de bord administrateur
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Connecté en tant que <strong>{user.username}</strong>
          </Typography>
        </Box>
        
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="admin tabs"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Page d'accueil" {...a11yProps(0)} />
              <Tab label="Services" {...a11yProps(1)} />
              <Tab label="Domaines d'expertise" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ mt: 2, mb: 4 }}>
              <HeroEditor />
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ mt: 2, mb: 4 }}>
              <ServicesEditor />
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Box sx={{ mt: 2, mb: 4 }}>
              <ExpertiseEditor />
            </Box>
          </TabPanel>
        </Box>
      </Container>
      
      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', mt: 'auto' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Wisetech Eng - Tous droits réservés
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminPage;
