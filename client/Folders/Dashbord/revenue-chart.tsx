"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2200 },
  { month: "Mar", revenue: 1800 },
  { month: "Apr", revenue: 3200 },
  { month: "May", revenue: 4100 },
  { month: "Jun", revenue: 5000 },
];

export default function RevenueChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Area
            dataKey="revenue"
            type="monotone"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}