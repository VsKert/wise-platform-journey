import { AlertTriangle, Info, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Notification } from "@/contexts/NotificationsContext";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onDismiss: (id: string) => void;
}

export const NotificationItem = ({ notification, onMarkAsRead, onDismiss }: NotificationItemProps) => {
  const getIcon = () => {
    switch (notification.type) {
      case "action_needed":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      default:
        return <Info className="h-5 w-5 text-primary" />;
    }
  };

  const getTimeAgo = () => {
    const now = new Date();
    const diff = now.getTime() - notification.createdAt.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return "Just now";
  };

  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
    if (notification.actionUrl) {
      window.location.hash = notification.actionUrl;
    }
  };

  return (
    <div
      className={`p-4 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer ${
        !notification.read ? "bg-primary/5" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h4 className={`text-sm font-semibold ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>
              {notification.title}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDismiss(notification.id);
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{getTimeAgo()}</span>
            {notification.actionLabel && (
              <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                {notification.actionLabel} →
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
