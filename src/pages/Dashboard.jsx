import React from 'react';
import { kpiData, trendData, alerts, pHData, tempData, ammoniaData } from '../data/mockData';
import KPIcard from '../components/KPIcard';
import ChartCard from '../components/ChartCard';
import AlertCard from '../components/AlertCard';
import LiveCamera from '../components/LiveCamera';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Global Health Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KPIcard title="Average Dissolved Oxygen" value={`${kpiData.dissolvedOxygen.value} mg/L`} trend={kpiData.dissolvedOxygen.trend} />
        <KPIcard title="Average pH Level" value={kpiData.pHLevel.value} trend={kpiData.pHLevel.trend} />
        <KPIcard title="Active Alerts" value={`${kpiData.activeAlerts.value} Alerts`} />
        <KPIcard title="Total Fish Count" value={kpiData.fishCount.value} />
        <KPIcard title="Average Water Quality" value={`${kpiData.waterQuality.value}%`} />
        <KPIcard title="System Efficiency" value={`${kpiData.efficiency.value}%`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ChartCard title="Dissolved Oxygen Trend">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis dataKey="time" stroke="#00ffff" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pond1" stroke="#00ffff" />
              <Line type="monotone" dataKey="pond2" stroke="#50fa7b" />
              <Line type="monotone" dataKey="pond3" stroke="#ffcc00" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="pH Levels">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pHData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis dataKey="time" stroke="#00ffff" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Water Temperature">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tempData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis dataKey="time" stroke="#50fa7b" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#50fa7b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Ammonia Levels">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ammoniaData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis dataKey="time" stroke="#ffcc00" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#ffcc00" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LiveCamera
          title="Pond 1 Sector A"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60"
        />
        <LiveCamera
          title="Pond 2 Sector B"
          src="https://images.unsplash.com/photo-1566807720902-5cda460d0f8b?auto=format&fit=crop&w=400&q=60"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Recent Alerts</h3>
        <div className="space-y-2">
          {alerts.map((a, idx) => (
            <AlertCard key={idx} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
}