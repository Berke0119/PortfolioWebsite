import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./mock/axiosMock";
import { DataProvider } from './context/DataContext.jsx'
import 'swiper/css';
import 'swiper/css/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
          />
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
