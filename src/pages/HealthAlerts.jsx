import React, { useState } from 'react';
import { alertHistory } from '../data/mockData';

export default function HealthAlerts() {
  const [filters, setFilters] = useState({ severity: '', pond: '', status: '' });

  const filtered = alertHistory.filter((a) => {
    return (
      (filters.severity === '' || a.severity === filters.severity) &&
      (filters.pond === '' || a.pond === filters.pond) &&
      (filters.status === '' || a.status === filters.status)
    );
  });

  const ponds = [...new Set(alertHistory.map((a) => a.pond))];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Alert History</h2>
      <div className="flex space-x-4 mb-4">
        <select
          value={filters.severity}
          onChange={(e) => setFilters({ ...filters, severity: e.target.value })}
          className="bg-slate-panel p-2 rounded"
        >
          <option value="">All Severities</option>
          <option value="Critical">Critical</option>
          <option value="Warning">Warning</option>
          <option value="Info">Info</option>
        </select>
        <select
          value={filters.pond}
          onChange={(e) => setFilters({ ...filters, pond: e.target.value })}
          className="bg-slate-panel p-2 rounded"
        >
          <option value="">All Ponds</option>
          {ponds.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="bg-slate-panel p-2 rounded"
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
      <div className="space-y-2">
        {filtered.map((a) => (
          <div key={a.id} className="bg-slate-panel p-4 rounded">
            <div>ID {a.id}</div>
            <div>Pond {a.pond}</div>
            <div>{a.type}</div>
            <div>Severity: {a.severity}</div>
            <div>Status: {a.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}