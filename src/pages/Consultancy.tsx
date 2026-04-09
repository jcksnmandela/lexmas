import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Business Consultancy</h1>
      <p>This is a placeholder page for Business Consultancy.</p>
      <Link to="/" className="text-orange-600 hover:underline">Back to Home</Link>
    </div>
  );
}
