import { createContext, useState, useEffect, useContext } from 'react';

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  // État initial des services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Structures en Béton",
      description: [
        "Conception et réalisation de structures en béton armé",
        "Fondations et terrassements",
        "Réhabilitation de bâtiments",
        "Structures spéciales et complexes"
      ]
    },
    {
      id: 2,
      title: "Charpentes Métalliques",
      description: [
        "Conception et réalisation de structures métalliques",
        "Charpentes industrielles",
        "Structures préfabriquées",
        "Montage et assemblage"
      ]
    },
    {
      id: 3,
      title: "Ingénierie",
      description: [
        "Études techniques et calculs",
        "Direction d'œuvre",
        "Contrôle de qualité",
        "Assistance à maîtrise d'ouvrage"
      ]
    }
  ]);

  // Charger les données depuis le localStorage au démarrage
  useEffect(() => {
    const savedServices = localStorage.getItem('services_data');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
  }, []);

  // Sauvegarder les modifications
  const updateServices = (newServices) => {
    setServices(newServices);
    localStorage.setItem('services_data', JSON.stringify(newServices));
  };

  // Mettre à jour un service spécifique
  const updateService = (id, updatedService) => {
    const updatedServices = services.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    );
    updateServices(updatedServices);
  };

  // Ajouter un nouveau service
  const addService = (newService) => {
    const serviceWithId = { ...newService, id: Date.now() };
    const updatedServices = [...services, serviceWithId];
    updateServices(updatedServices);
    return serviceWithId;
  };

  // Supprimer un service
  const deleteService = (id) => {
    const updatedServices = services.filter(service => service.id !== id);
    updateServices(updatedServices);
  };

  return (
    <ServicesContext.Provider 
      value={{ 
        services, 
        updateServices, 
        updateService, 
        addService, 
        deleteService 
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};
