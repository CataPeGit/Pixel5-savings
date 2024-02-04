import React, {createContext, useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {PaletteMode, useMediaQuery} from "@mui/material";
import Category from './Components/Purchase/Purchase';
import getDesignTokens from './Components/PageLayout/theme';
import Categories from './Components/Purchases/purchases';
import Homepage from './Components/Homepage/homepage';
import LoginPage from './Components/LoginPage/loginPage';
import Register from './Components/RegisterPage/register';


export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function App() {
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
            {/* <LoginPage></LoginPage> */}
            {/* <Register></Register> */}
            <Homepage></Homepage>
      </ThemeProvider>
    );
}

export default App;

