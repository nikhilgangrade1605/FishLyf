export const kpiData = {
  dissolvedOxygen: { value: 7.2, trend: '+0.3' },
  pHLevel: { value: 6.8, trend: '-0.2' },
  activeAlerts: { value: 3 },
  fishCount: { value: 1000 },
  waterQuality: { value: 92 },
  efficiency: { value: 87 }
};

export const trendData = [
  { time: '06:00', pond1: 6.8, pond2: 7.0, pond3: 6.9 },
  { time: '08:00', pond1: 7.0, pond2: 7.1, pond3: 7.0 },
  { time: '10:00', pond1: 7.1, pond2: 7.2, pond3: 7.1 },
  { time: '12:00', pond1: 7.2, pond2: 7.3, pond3: 7.3 },
  { time: '14:00', pond1: 7.0, pond2: 7.1, pond3: 7.2 },
  { time: '16:00', pond1: 7.3, pond2: 7.0, pond3: 7.1 }
];

export const pHData = [
  { time: '06:00', value: 6.7 },
  { time: '09:00', value: 6.8 },
  { time: '12:00', value: 6.9 },
  { time: '15:00', value: 7.0 },
  { time: '18:00', value: 6.9 }
];

export const tempData = [
  { time: '06:00', temp: 24 },
  { time: '09:00', temp: 25 },
  { time: '12:00', temp: 26 },
  { time: '15:00', temp: 25 },
  { time: '18:00', temp: 24 }
];

export const ammoniaData = [
  { time: '06:00', value: 0.18 },
  { time: '09:00', value: 0.20 },
  { time: '12:00', value: 0.22 },
  { time: '15:00', value: 0.21 },
  { time: '18:00', value: 0.19 }
];

export const alerts = [
  { severity: 'critical', message: 'Low Dissolved Oxygen detected in Pond 2', value: '5.1 mg/L', time: '03:49 AM' },
  { severity: 'warning', message: 'pH Level rising in Pond 3', value: '7.8' },
  { severity: 'info', message: 'Temperature stable in Pond 1' }
];

export const pondComparison = [
  { name: 'Pond1', DO: 7.1 },
  { name: 'Pond2', DO: 6.8 },
  { name: 'Pond3', DO: 7.3 },
  { name: 'Pond4', DO: 7.0 }
];

export const fishHealthDist = [
  { name: 'Healthy', value: 85 },
  { name: 'Monitor', value: 12 },
  { name: 'Critical', value: 3 }
];

export const weeklyDO = [
  { day: 'Mon', DO: 7.0 },
  { day: 'Tue', DO: 6.9 },
  { day: 'Wed', DO: 7.1 },
  { day: 'Thu', DO: 7.2 },
  { day: 'Fri', DO: 7.0 },
  { day: 'Sat', DO: 7.3 },
  { day: 'Sun', DO: 7.1 }
];

export const devices = [
  { name: 'Sensor Node A', location: 'Pond 1', status: 'Online', battery: 87, updated: '5m ago' },
  { name: 'Sensor Node B', location: 'Pond 2', status: 'Online', battery: 73, updated: '12m ago' },
  { name: 'Underwater Camera 01', location: 'Pond 1', status: 'Streaming' },
  { name: 'Water Pump Controller', location: 'Pond 3', status: 'Maintenance' }
];

export const alertHistory = [
  { id: 1021, pond: 'Pond 2', type: 'Low Oxygen', severity: 'Critical', status: 'Active' },
  { id: 1018, pond: 'Pond 3', type: 'High pH', severity: 'Warning', status: 'Resolved' },
  { id: 1007, pond: 'Pond 1', type: 'Temperature fluctuation', severity: 'Info', status: 'Active' }
];