// src/invoices/InvoiceModal.tsx
type Props = {
    invoice: any;
    onClose: () => void;
  };
  
  export default function InvoiceModal({ invoice, onClose }: Props) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Invoice Details</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Vendor:</strong> {invoice.vendor_name}</p>
            <p><strong>Amount:</strong> ₹{invoice.amount}</p>
            <p><strong>Due Date:</strong> {new Date(invoice.due_date).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {invoice.description}</p>
            <p><strong>Paid:</strong> {invoice.paid ? 'Yes' : 'No'}</p>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  