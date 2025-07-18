import { createContext, useState, useEffect, useContext } from 'react';

const ExpertiseContext = createContext();

export const ExpertiseProvider = ({ children }) => {
  // État initial des domaines d'expertise
  const [expertiseDomains, setExpertiseDomains] = useState([
    {
      id: 1,
      title: "Diagnostic Structure",
      subtitle: "Avant/Après Achat",
      description: "Expertise technique complète pour sécuriser vos investissements immobiliers.",
      backDescription: "Études approfondies de la structure des bâtiments avant et après achat, avec recommandations techniques personnalisées.",
      icon: "home",
      image: "structure-engineering.jpg",
      cards: [
        {
          icon: "apartment",
          title: "Bâtiments",
          description: "Expertise structurelle complète pour tous types de bâtiments résidentiels et tertiaires."
        },
        {
          icon: "construction",
          title: "Génie Civil",
          description: "Études structurelles pour ouvrages d'art et infrastructures publiques."
        },
        {
          icon: "bridge",
          title: "Ouvrages d'Art",
          description: "Études structurelles spécialisées pour ponts, viaducs et autres structures complexes."
        },
        {
          icon: "factory",
          title: "Bâtiment Industriel",
          description: "Expertise structurelle pour usines, entrepôts et installations industrielles."
        }
      ]
    },
    {
      id: 2,
      title: "BIM & Études Structure",
      subtitle: "Revit, SolidWorks",
      description: "Modélisation 3D et études structurelles innovantes pour vos projets.",
      backDescription: "Méthodologie BIM complète avec des outils de pointe pour une conception et une exécution optimisées.",
      icon: "precision_manufacturing",
      image: "bim-engineering.jpg",
      cards: [
        {
          icon: "architecture",
          title: "Modélisation 3D",
          description: "Création de maquettes numériques précises pour une meilleure visualisation."
        },
        {
          icon: "engineering",
          title: "Calculs Structurels",
          description: "Analyses avancées pour garantir la stabilité et la sécurité des structures."
        },
        {
          icon: "integration_instructions",
          title: "Coordination BIM",
          description: "Gestion collaborative des maquettes numériques entre les différents corps de métier."
        },
        {
          icon: "insights",
          title: "Simulations",
          description: "Tests virtuels des performances structurelles dans différentes conditions."
        }
      ]
    }
  ]);

  // Charger les données depuis le localStorage au démarrage
  useEffect(() => {
    const savedExpertise = localStorage.getItem('expertise_domains');
    if (savedExpertise) {
      setExpertiseDomains(JSON.parse(savedExpertise));
    }
  }, []);

  // Sauvegarder les modifications
  const updateExpertiseDomains = (newExpertise) => {
    setExpertiseDomains(newExpertise);
    localStorage.setItem('expertise_domains', JSON.stringify(newExpertise));
  };

  // Mettre à jour un domaine spécifique
  const updateExpertiseDomain = (id, updatedDomain) => {
    const updatedDomains = expertiseDomains.map(domain => 
      domain.id === id ? { ...domain, ...updatedDomain } : domain
    );
    updateExpertiseDomains(updatedDomains);
  };

  // Mettre à jour une carte spécifique dans un domaine
  const updateExpertiseCard = (domainId, cardIndex, updatedCard) => {
    const updatedDomains = expertiseDomains.map(domain => {
      if (domain.id === domainId) {
        const updatedCards = [...domain.cards];
        updatedCards[cardIndex] = { ...updatedCards[cardIndex], ...updatedCard };
        return { ...domain, cards: updatedCards };
      }
      return domain;
    });
    updateExpertiseDomains(updatedDomains);
  };

  // Ajouter un nouveau domaine
  const addExpertiseDomain = (newDomain) => {
    const domainWithId = { ...newDomain, id: Date.now() };
    const updatedDomains = [...expertiseDomains, domainWithId];
    updateExpertiseDomains(updatedDomains);
    return domainWithId;
  };

  // Supprimer un domaine
  const deleteExpertiseDomain = (id) => {
    const updatedDomains = expertiseDomains.filter(domain => domain.id !== id);
    updateExpertiseDomains(updatedDomains);
  };

  return (
    <ExpertiseContext.Provider 
      value={{ 
        expertiseDomains, 
        updateExpertiseDomains,
        updateExpertiseDomain,
        updateExpertiseCard,
        addExpertiseDomain,
        deleteExpertiseDomain
      }}
    >
      {children}
    </ExpertiseContext.Provider>
  );
};

export const useExpertise = () => {
  const context = useContext(ExpertiseContext);
  if (!context) {
    throw new Error('useExpertise must be used within an ExpertiseProvider');
  }
  return context;
};
