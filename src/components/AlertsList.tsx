import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  message: string;
  type: "warning" | "danger" | "success";
  timestamp: string;
}

interface AlertsListProps {
  alerts: Alert[];
  className?: string;
}

export const AlertsList = ({ alerts, className }: AlertsListProps) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Bell className="h-5 w-5" />
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-lg flex items-start space-x-2",
                alert.type === "warning" && "bg-warning/10 text-warning",
                alert.type === "danger" && "bg-danger/10 text-danger",
                alert.type === "success" && "bg-success/10 text-success"
              )}
            >
              <div className="flex-1">
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm opacity-80">{alert.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};