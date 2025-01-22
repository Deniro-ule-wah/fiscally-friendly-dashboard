import { ArrowDownRight, ArrowUpRight, DollarSign, LineChart, PieChart, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { FinancialChart } from "@/components/FinancialChart";
import { AlertsList } from "@/components/AlertsList";

// Mock data - replace with real data in production
const revenueData = Array.from({ length: 12 }, (_, i) => ({
  date: `2024-${String(i + 1).padStart(2, "0")}`,
  value: Math.floor(Math.random() * 50000) + 30000,
}));

const alerts = [
  {
    id: "1",
    message: "Revenue exceeded target by 15%",
    type: "success" as const,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    message: "Expenses approaching monthly budget limit",
    type: "warning" as const,
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    message: "Critical: Cash flow below threshold",
    type: "danger" as const,
    timestamp: "1 day ago",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="text-gray-500 mt-2">Monitor your company's financial health at a glance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Revenue"
            value="$128,420"
            trend={{ value: 12.5, isPositive: true }}
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
          <MetricCard
            title="Expenses"
            value="$64,208"
            trend={{ value: 8.2, isPositive: false }}
            icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          />
          <MetricCard
            title="Net Profit"
            value="$64,212"
            trend={{ value: 22.4, isPositive: true }}
            icon={<LineChart className="h-4 w-4 text-muted-foreground" />}
          />
          <MetricCard
            title="Profit Margin"
            value="50.0%"
            trend={{ value: 5.1, isPositive: true }}
            icon={<PieChart className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <FinancialChart
            title="Revenue Trend"
            data={revenueData}
            className="lg:col-span-2"
          />
          <AlertsList alerts={alerts} />
        </div>
      </div>
    </div>
  );
};

export default Index;