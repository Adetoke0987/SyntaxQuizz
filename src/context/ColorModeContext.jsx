// /* eslint-disable react/prop-types */
// import { createContext, useState, useEffect, useContext } from 'react';

// const ColorModeContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export const useColorMode = () => {
//   return useContext(ColorModeContext);
// };

// export const ColorModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const persistedMode = localStorage.getItem('color-mode');
//     return persistedMode === 'dark';
//   });

//   useEffect(() => {
//     localStorage.setItem('color-mode', isDarkMode ? 'dark' : 'light');
//   }, [isDarkMode]);

//   const themes = {
//     light: {
//       backgroundColor: '#fff',
//       textColor: '#000',
//     },
//     dark: {
//       backgroundColor: '#000',
//       textColor: '#fff',
//     },
//   };

//   const [theme, setTheme] = useState(themes[isDarkMode ? 'dark' : 'light']);

//   const toggleColorMode = () => {
//     setIsDarkMode(prevMode => !prevMode);
   
//     setTheme(themes[isDarkMode ? 'dark' : 'light']);
//   };

//   return (
//     <ColorModeContext.Provider value={{ isDarkMode, toggleColorMode, theme }}>
//       {children}
//     </ColorModeContext.Provider>
//   );
// };

// export default ColorModeContext;
