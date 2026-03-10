import React from 'react';
import RoleCard from '../components/RoleCard';
import { User, Shield, Settings, Database } from 'lucide-react';

export default function Login() {
  const roles = [
    {
      role: 'Farmer',
      description: 'Monitor pond health, view alerts, and manage feeding schedules.',
      icon: User
    },
    {
      role: 'Admin',
      description: 'Full system access including user management and device configuration.',
      icon: Shield
    },
    {
      role: 'Operator',
      description: 'Monitor sensors, respond to alerts, maintain equipment.',
      icon: Settings
    },
    {
      role: 'Researcher',
      description: 'Analyze historical data and export reports.',
      icon: Database
    }
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-navy-gradient-start">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">FisLyf</h1>
        <h2 className="text-xl text-gray-300">
          Industrial IoT Fish Health Monitoring System
        </h2>
        <p className="text-gray-400">Select your access role</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {roles.map((r) => (
            <RoleCard
              key={r.role}
              role={r.role}
              description={r.description}
              icon={r.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
