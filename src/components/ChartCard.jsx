import React from 'react';

export default function ChartCard({ title, children }) {
  return (
    <div className="bg-slate-panel p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="w-full h-64">{children}</div>
    </div>
  );
}
