import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';

import { GlobaStyle } from "./styles/global";
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
      <GlobaStyle />
    </ThemeProvider>
  )
}