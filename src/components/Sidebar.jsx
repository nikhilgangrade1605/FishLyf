import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const menu = [
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Pond Analytics', to: '/pond-analytics' },
  { name: 'Health Alerts', to: '/health-alerts' },
  { name: 'Device Management', to: '/device-management' }
];

export default function Sidebar({ open = true, onClose }) {
  const navigate = useNavigate();
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-panel flex flex-col justify-between p-4 transform transition-transform duration-300 md:relative md:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold mb-8">FisLyf</h1>
        <nav className="space-y-4">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `block py-2 px-3 rounded hover:bg-slate-600 ${
                  isActive ? 'bg-slate-700' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <div className="text-sm mb-4">
          <div>System Status</div>
          <div className="text-green-400">Online</div>
          <div className="text-white">12 Devices Connected</div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-red-400 hover:text-red-600"
        >
          <LogOut className="w-4 h-4 mr-1" /> Logout
        </button>
      </div>
    </aside>
  );
}
