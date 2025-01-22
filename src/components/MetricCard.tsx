import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  className?: string;
}

export const MetricCard = ({ title, value, trend, icon, className }: MetricCardProps) => {
  return (
    <Card className={cn("transition-all hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold animate-number-counter">{value}</div>
        {trend && (
          <p className={cn("mt-2 text-xs", trend.isPositive ? "text-success" : "text-danger")}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};