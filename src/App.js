

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useEffect } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import theme from "assets/theme";

import Presentation from "layouts/pages/presentation";
import AdminPage from "pages/Admin";
import Login from "pages/Login";
import { HeroProvider } from "context/HeroContext";
import { AuthProvider, ProtectedRoute } from "context/AuthContext";
import { ServicesProvider } from "context/ServicesContext";
import { ExpertiseProvider } from "context/ExpertiseContext";

import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key || `route-${index}`} />;
      }

      return null;
    }).filter(Boolean);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <HeroProvider>
          <ServicesProvider>
            <ExpertiseProvider>
              <Routes>
                {getRoutes(routes)}
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute>
                      <AdminPage />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<Navigate to="/presentation" />} />
              </Routes>
            </ExpertiseProvider>
          </ServicesProvider>
        </HeroProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
