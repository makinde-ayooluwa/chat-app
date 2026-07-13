import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext();
export const useTheme = () => {
    const context = useContext(ThemeContext);

    // Safety check: Make sure your component is wrapped in ThemeProvider
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context; // This returns your { theme } object
};
export default function ThemeProvider({ children }) {
    const theme = useColorScheme();
    return <ThemeContext.Provider value={{ theme }}>
        {children}
    </ThemeContext.Provider>
}
