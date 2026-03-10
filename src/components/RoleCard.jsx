import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleCard({ role, description, icon: Icon }) {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-panel p-6 rounded shadow flex flex-col items-center text-center space-y-4">
      {Icon && <Icon className="w-12 h-12 text-neon-cyan" />}
      <div className="font-bold text-xl">{role}</div>
      <div className="text-sm text-gray-300">{description}</div>
      <button
        onClick={() => navigate(`/dashboard?role=${role.toLowerCase()}`)}
        className="mt-2 px-4 py-2 bg-neon-cyan text-black rounded"
      >
        Enter
      </button>
    </div>
  );
}
