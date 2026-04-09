import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TaxationPage from './pages/Taxation';
import AccountingPage from './pages/Accounting';
import ConsultancyPage from './pages/Consultancy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taxation" element={<TaxationPage />} />
        <Route path="/accounting" element={<AccountingPage />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
