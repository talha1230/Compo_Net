import { ThemeProvider } from '../src/context/ThemeContext';
import '../app/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
	<ThemeProvider>
	  <Component {...pageProps} />
	</ThemeProvider>
  );
}

export default MyApp;