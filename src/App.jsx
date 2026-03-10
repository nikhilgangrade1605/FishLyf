import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PondAnalytics from './pages/PondAnalytics';
import HealthAlerts from './pages/HealthAlerts';
import DeviceManagement from './pages/DeviceManagement';
import Sidebar from './components/Sidebar';

function App() {
  const location = useLocation();
  const isLogin = location.pathname === '/';
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {!isLogin && (
        <>
          <button
            className="md:hidden absolute top-4 left-4 z-50 text-white"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}
      <div className="flex-1 overflow-auto bg-navy-gradient-start p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pond-analytics" element={<PondAnalytics />} />
          <Route path="/health-alerts" element={<HealthAlerts />} />
          <Route path="/device-management" element={<DeviceManagement />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;