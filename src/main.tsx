import React from 'react';
import Header from './components/Layout/Header';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // برای مسیریابی
import { ThemeProvider } from 'next-themes'; // مدیریت تم
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ThemeProvider باید بیرون باشد تا هوک useTheme در App کار کند */}
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <BrowserRouter>
      <Header/>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
