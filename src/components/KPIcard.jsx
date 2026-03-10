import React from 'react';

export default function KPIcard({ title, value, trend }) {
  return (
    <div className="bg-slate-panel p-4 rounded shadow">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {trend && <div className="text-xs text-gray-300">Trend {trend}</div>}
    </div>
  );
}
