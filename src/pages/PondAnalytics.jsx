import React from 'react';
import { pondComparison, fishHealthDist, weeklyDO } from '../data/mockData';
import ChartCard from '../components/ChartCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function PondAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Pond Parameter Comparison</h2>
      <ChartCard title="DO Comparison">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pondComparison} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#00ffff" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="DO" fill="#00ffff" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <h2 className="text-2xl font-semibold">Fish Health Distribution</h2>
      <ChartCard title="Health Distribution">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={fishHealthDist}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {fishHealthDist.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.name === 'Healthy'
                      ? '#50fa7b'
                      : entry.name === 'Monitor'
                      ? '#ffcc00'
                      : '#ff5555'
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <h2 className="text-2xl font-semibold">Weekly DO Trend</h2>
      <ChartCard title="Weekly DO">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyDO} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="day" stroke="#00ffff" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="DO" stroke="#00ffff" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}