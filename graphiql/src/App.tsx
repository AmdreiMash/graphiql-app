import { Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Sing from './Pages/Sign';
import Graphi from './Pages/Graphi';
import NotFound from './Pages/NotFound';
import Layout from './components/Layout';
import { withTranslation } from 'react-i18next';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/sing" element={<Sing />} />
            <Route path="/graphi" element={<Graphi />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default withTranslation()(App);
