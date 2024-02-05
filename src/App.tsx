import React, {createContext, useContext} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {PaletteMode, useMediaQuery} from "@mui/material";
import Category from './Components/Purchase/Purchase';
import getDesignTokens from './Components/PageLayout/theme';
import Categories from './Components/Purchases/purchases';
import Homepage from './Components/Homepage/homepage';
import LoginPage from './Components/LoginPage/loginPage';
import Register from './Components/RegisterPage/register';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function App() {
    const isLoggedIn = useSelector((state:any) => state.authentification.isLoggedIn);
    const [mode, setMode] = React.useState<PaletteMode>('dark');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                ); 
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


    return (
        <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/" element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />} />
          {/* Additional routes can be added as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
    );
}

export default App;

