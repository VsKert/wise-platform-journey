import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Clock, Circle, AlertTriangle } from "lucide-react";

export const PartnershipPipeline = () => {
  const stages = [
    {
      id: 1,
      title: "Application Submitted",
      description: "Your partnership application has been received",
      status: "completed",
      date: "Oct 15, 2024"
    },
    {
      id: 2,
      title: "Initial Review",
      description: "Our team is reviewing your application",
      status: "action_needed",
      date: "Action Required",
      actionRequired: {
        message: "Please upload your KYC compliance documents to proceed with the review process.",
        actionLabel: "Upload Documents",
        actionUrl: "#documents"
      }
    },
    {
      id: 3,
      title: "Terms Discussion",
      description: "Partnership terms and agreement",
      status: "action_needed",
      date: "Action Required",
      actionRequired: {
        message: "Your partnership agreement is ready for review and signature.",
        actionLabel: "Review Agreement",
        actionUrl: "#agreement"
      }
    },
    {
      id: 4,
      title: "Integration Setup",
      description: "Certificate setup and API configuration",
      status: "pending",
      date: "Pending"
    },
    {
      id: 5,
      title: "Production Access",
      description: "Live API credentials and go-live",
      status: "pending",
      date: "Pending"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-success" />;
      case "active":
        return <Clock className="h-6 w-6 text-primary animate-pulse" />;
      case "action_needed":
        return <AlertTriangle className="h-6 w-6 text-amber-500 animate-pulse" />;
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case "active":
        return <Badge className="bg-primary/10 text-primary border-primary/20">In Progress</Badge>;
      case "action_needed":
        return <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20">Action Needed</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Partnership Status</CardTitle>
        <CardDescription>Track your onboarding progress in real-time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <div key={stage.id} className="relative">
              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div
                  className={`absolute left-3 top-12 h-16 w-0.5 ${
                    stage.status === "completed" ? "bg-success" : "bg-border"
                  }`}
                />
              )}

              {/* Stage Content */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">{getStatusIcon(stage.status)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-semibold">{stage.title}</h4>
                    {getStatusBadge(stage.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stage.description}</p>
                  <p className="text-xs text-muted-foreground">{stage.date}</p>
                  
                  {/* Action Required Alert */}
                  {stage.status === "action_needed" && stage.actionRequired && (
                    <Alert className="mt-4 border-amber-500/20 bg-amber-500/5">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      <AlertDescription className="ml-2">
                        <p className="text-sm mb-2">{stage.actionRequired.message}</p>
                        <Button
                          size="sm"
                          className="bg-amber-500 hover:bg-amber-600 text-white"
                          onClick={() => window.location.hash = stage.actionRequired.actionUrl}
                        >
                          {stage.actionRequired.actionLabel}
                        </Button>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Estimated Time to Completion:</strong> 2-3 business days
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
