import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface Notification {
  id: string;
  type: "action_needed" | "info" | "warning" | "success";
  title: string;
  message: string;
  stageId?: number;
  actionUrl?: string;
  actionLabel?: string;
  read: boolean;
  createdAt: Date;
}

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id" | "createdAt" | "read">) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  dismissNotification: (id: string) => void;
  getUnreadCount: () => number;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "action_needed",
    title: "Documents Required",
    message: "Please upload your KYC compliance documents to proceed with the review.",
    stageId: 2,
    actionUrl: "#documents",
    actionLabel: "Upload Documents",
    read: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    id: "2",
    type: "action_needed",
    title: "Agreement Ready",
    message: "Your partnership agreement is ready for review and signature.",
    stageId: 3,
    actionUrl: "#agreement",
    actionLabel: "Review Agreement",
    read: false,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
  },
  {
    id: "3",
    type: "info",
    title: "Application Received",
    message: "We've received your partnership application and will review it within 2-3 business days.",
    stageId: 1,
    read: true,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
  }
];

export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const addNotification = useCallback((notification: Omit<Notification, "id" | "createdAt" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      createdAt: new Date(),
      read: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev =>
      prev.map(notif => (notif.id === id ? { ...notif, read: true } : notif))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  }, []);

  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter(notif => !notif.read).length;
  }, [notifications]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        markAllAsRead,
        dismissNotification,
        getUnreadCount
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useNotifications must be used within NotificationsProvider");
  }
  return context;
};
