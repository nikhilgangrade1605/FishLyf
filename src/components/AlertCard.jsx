import React from 'react';

export default function AlertCard({ severity, message, value, time }) {
  let color = 'text-green-400';
  if (severity === 'warning') color = 'text-warning-yellow';
  if (severity === 'critical') color = 'text-critical-red';

  return (
    <div className={`bg-slate-panel p-3 rounded flex flex-col ${color}`}> 
      <div className="font-bold uppercase">{severity}</div>
      <div className="mt-1">{message}</div>
      {value && <div className="mt-1">Value: {value}</div>}
      {time && <div className="mt-1 text-xs text-gray-400">{time}</div>}
    </div>
  );
}
