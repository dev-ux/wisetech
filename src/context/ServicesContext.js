import { createContext, useState, useEffect, useContext } from 'react';

const ServicesContext = createContext();

// Données par défaut si aucun service n'existe
const defaultServices = [
  {
    id: '1',
      title: "Structures en Béton",
      subtitle: "Solutions durables et innovantes pour vos projets de construction",
      description: [
        "Conception et réalisation de structures en béton armé sur mesure",
        "Fondations profondes et superficielles adaptées à tous types de sols",
        "Réhabilitation et renforcement de structures existantes",
        "Ouvrages d'art et structures spéciales complexes",
        "Béton architectonique et décoratif"
      ],
      details: `Notre expertise en structures en béton couvre l'ensemble du processus de construction, de la conception technique à la réalisation finale. Nous combinons savoir-faire traditionnel et innovations technologiques pour répondre aux défis les plus exigeants.

Nos équipes qualifiées utilisent des matériaux de haute qualité et des techniques de construction avancées pour garantir la durabilité, la sécurité et l'esthétique de vos projets. Chaque structure est conçue pour résister aux contraintes mécaniques et environnementales spécifiques à son environnement.`,
      features: [
        "Béton armé et précontraint (BAP, BHP, BFUHP)",
        "Ouvrages d'art, ponts et viaducs",
        "Bâtiments résidentiels, tertiaires et industriels",
        "Structures parasismiques selon l'Eurocode 8",
        "Béton architectonique et bétons spéciaux",
        "Études géotechniques et fondations spéciales"
      ],
      benefits: [
        "Résistance mécanique et durabilité exceptionnelles",
        "Grande liberté architecturale et esthétique",
        "Excellente isolation thermique et acoustique naturelle",
        "Résistance au feu supérieure",
        "Faible empreinte carbone sur le cycle de vie",
        "Entretien minimal et longue durée de vie"
      ],
      image: "/images/services/beton.jpg",
      gallery: [
        "/images/services/beton-1.jpg",
        "/images/services/beton-2.jpg",
        "/images/services/beton-3.jpg",
        "/images/services/beton-4.jpg"
      ],
      technicalSpecs: {
        resistance: "Jusqu'à 150 MPa pour les bétons haute performance",
        dureeVie: "100+ ans pour les structures correctement conçues",
        normes: ["NF EN 206/CN", "Eurocode 2", "DTU 21", "PS-MI 89"]
      }
    },
    {
      id: '2',
      title: "Charpentes Métalliques",
      subtitle: "Excellence technique pour des constructions métalliques innovantes",
      description: [
        "Conception et réalisation de structures métalliques sur mesure",
        "Charpentes industrielles et bâtiments préfabriqués",
        "Halles de stockage et bâtiments agricoles",
        "Aménagements intérieurs et structures secondaires",
        "Bardages et couvertures industrielles"
      ],
      details: `Notre expertise en charpentes métalliques s'étend de la conception à la réalisation de structures métalliques de toutes tailles. Nous combinons innovation technique et respect des normes les plus strictes pour des solutions à la fois esthétiques et fonctionnelles.

Nos équipes qualifiées maîtrisent l'ensemble des procédés de fabrication et de mise en œuvre, garantissant ainsi des réalisations conformes aux exigences techniques et aux délais impartis.`,
      features: [
        "Bâtiments industriels et commerciaux clés en main",
        "Halls de stockage et entrepôts automatisés",
        "Structures modulaires et démontables",
        "Aménagements intérieurs sur mesure",
        "Couvertures et bardages isolés",
        "Protection incendie des structures"
      ],
      benefits: [
        "Rapidité exceptionnelle de mise en œuvre",
        "Grandes portées sans appuis intermédiaires",
        "Précision de fabrication en atelier",
        "Solution économique pour les grandes surfaces",
        "Flexibilité d'aménagement",
        "Matériau 100% recyclable"
      ],
      image: "/images/services/charpente.jpg",
      gallery: [
        "/images/services/charpente-1.jpg",
        "/images/services/charpente-2.webp",
        "/images/services/charpente-3.jpg",
        "/images/services/charpente-4.jpg"
      ],
      technicalSpecs: {
        materiaux: "Acier S235 à S460, aciers spéciaux, aluminium",
        traitement: "Galvanisation, peinture époxy, thermolaquage",
        normes: ["Eurocode 3", "NF EN 1090", "CSTB"],
        porteeMax: "Jusqu'à 100m sans appui intermédiaire"
      }
    },
    {
      id: '3',
      title: "Ingénierie Structurelle",
      subtitle: "Conception et optimisation de vos projets de construction",
      description: [
        "Études techniques et calculs de structure avancés",
        "Direction d'œuvre et coordination technique",
        "Contrôle qualité et diagnostics techniques",
        "Assistance à maîtrise d'ouvrage",
        "Expertises et pathologies du bâtiment"
      ],
      details: `Notre bureau d'études techniques vous accompagne dans toutes les phases de votre projet, de l'esquisse préliminaire à la réception des travaux. Nos ingénieurs expérimentés mettent leur expertise à votre service pour optimiser vos projets, réduire les coûts et respecter les délais, tout en garantissant la qualité et la pérennité des ouvrages.

Nous utilisons les logiciels les plus récents (Robot Structural Analysis, SCIA Engineer, Advance Design) pour des simulations précises et des modélisations 3D réalistes.`,
      features: [
        "Calculs de structure avancés (linéaires et non-linéaires)",
        "Études de faisabilité et avant-projets techniques",
        "Expertises techniques et diagnostics structurels",
        "Plans d'exécution détaillés (DAO/DAO)",
        "Suivi et contrôle de chantier",
        "Études sismiques et dynamiques"
      ],
      benefits: [
        "Optimisation des coûts de construction",
        "Respect strict des normes et réglementations",
        "Solutions techniques innovantes et durables",
        "Accompagnement personnalisé tout au long du projet",
        "Réduction des délais d'exécution",
        "Garantie de qualité et de sécurité"
      ],
      image: "/images/services/ingenierie.jpg",
      gallery: [
        "/images/services/ingenierie-1.jpg",
        "/images/services/ingenierie-2.jpg",
        "/images/services/ingenierie-3.jpg",
        "/images/services/ingenierie-4.jpg"
      ],
      technicalSpecs: {
        logiciels: "Robot Structural Analysis, SCIA Engineer, Advance Design",
        normes: ["Eurocodes", "DTU", "Règles PS", "Règles NV"],
        certifications: ["Qualibat", "Bureau d'Études Techniques", "OPQIBI"]
      }
    }
  ];

export const ServicesProvider = ({ children }) => {
  // Charger les services depuis le localStorage ou utiliser les données par défaut
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem('services');
    return saved ? JSON.parse(saved) : defaultServices;
  });

  // Sauvegarder dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  // Mettre à jour un service
  const updateService = (id, updatedService) => {
    setServices(prev => 
      prev.map(service => 
        service.id === id ? { ...service, ...updatedService } : service
      )
    );
  };

  // Ajouter un nouveau service
  const addService = (newService) => {
    const serviceWithId = { 
      ...newService, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString() 
    };
    setServices(prev => [...prev, serviceWithId]);
  };

  // Supprimer un service
  const deleteService = (id) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  return (
    <ServicesContext.Provider 
      value={{ 
        services, 
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
