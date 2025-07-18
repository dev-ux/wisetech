import { createContext, useState, useContext, useEffect } from 'react';

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  // État initial du hero
  const [heroContent, setHeroContent] = useState({
    title: "Wisetech Eng",
    subtitle: "Experts en génie civil et construction de structures de bâtiments. Votre partenaire pour la réalisation de vos projets architecturaux."
  });

  // Charger les données depuis le localStorage au démarrage
  useEffect(() => {
    const savedContent = localStorage.getItem('heroContent');
    if (savedContent) {
      setHeroContent(JSON.parse(savedContent));
    }
  }, []);

  // Sauvegarder les modifications
  const updateHeroContent = (newContent) => {
    const updatedContent = { ...heroContent, ...newContent };
    setHeroContent(updatedContent);
    localStorage.setItem('heroContent', JSON.stringify(updatedContent));
  };

  return (
    <HeroContext.Provider value={{ heroContent, updateHeroContent }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useHero must be used within a HeroProvider');
  }
  return context;
};
