import React from 'react';

export default function DeviceCard({ name, location, status, battery, updated }) {
  return (
    <div className="bg-slate-panel p-4 rounded shadow">
      <div className="font-semibold">{name}</div>
      <div className="text-sm">Location: {location}</div>
      <div className="text-sm">Status: {status}</div>
      {battery !== undefined && (
        <div className="text-sm">Battery: {battery}%</div>
      )}
      {updated && <div className="text-xs text-gray-400">Last updated: {updated}</div>}
    </div>
  );
}
