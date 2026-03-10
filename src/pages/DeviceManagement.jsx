import React from 'react';
import { devices } from '../data/mockData';
import DeviceCard from '../components/DeviceCard';

export default function DeviceManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Device Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {devices.map((d, idx) => (
          <DeviceCard key={idx} {...d} />
        ))}
      </div>
    </div>
  );
}