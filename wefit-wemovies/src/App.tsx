import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

import { GlobaStyle } from "./styles/global";
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobaStyle />
    </ThemeProvider>
  )
}