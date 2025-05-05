import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import InvoicesPage from './invoices/InvoicesPage';
import ProtectedRoute from './auth/ProtectedRoute';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
  path="/invoices"
  element={
    <ProtectedRoute>
      <InvoicesPage />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}