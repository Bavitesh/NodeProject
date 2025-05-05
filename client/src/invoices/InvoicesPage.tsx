// src/invoices/InvoicesPage.tsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useQuery } from '@tanstack/react-query';
import { fetchInvoices, fetchInvoiceById } from './invoiceAPI';
import InvoiceModal from './InvoiceModal';
import Navbar from '../components/Navbar';

export default function InvoicesPage() {
  const token = useSelector((state: RootState) => state.auth.token);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['invoices'],
    queryFn: () => fetchInvoices(token!),
    enabled: !!token,
  });

  const handleInvoiceClick = async (id: number) => {
    const invoice = await fetchInvoiceById(id, token!);
    setSelectedInvoice(invoice);
  };

  return (
<div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Invoices</h1>

        {isLoading && <p>Loading invoices...</p>}
        {error && <p className="text-red-600">Error fetching invoices.</p>}

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-gray-500 font-medium">Vendor</th>
                <th className="px-6 py-3 text-left text-gray-500 font-medium">Amount</th>
                <th className="px-6 py-3 text-left text-gray-500 font-medium">Due Date</th>
                <th className="px-6 py-3 text-left text-gray-500 font-medium">Paid</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((invoice: any) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => handleInvoiceClick(invoice.id)}
                >
                  <td className="px-6 py-4">{invoice.vendor_name}</td>
                  <td className="px-6 py-4">₹{invoice.amount}</td>
                  <td className="px-6 py-4">{new Date(invoice.due_date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{invoice.paid ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {selectedInvoice && (
        <InvoiceModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}
    </div>
  );
}
