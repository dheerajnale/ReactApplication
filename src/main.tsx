import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx'
import './index.css'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Set your primary color
    },
    // Add other color customizations if needed
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )