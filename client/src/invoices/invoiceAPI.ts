// src/invoices/invoiceAPI.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchInvoices = async (token: string) => {
  const res = await axios.get(`${API_URL}/invoices`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchInvoiceById = async (id: number, token: string) => {
  const res = await axios.get(`${API_URL}/invoices/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
