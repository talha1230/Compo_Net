import { ThemeProvider, useTheme } from '../src/context/ThemeContext';
import '../app/globals.css';
import React, { useEffect, ReactNode } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default MyApp;