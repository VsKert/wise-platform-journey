import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Zap } from "lucide-react";

export const ApiCatalog = () => {
  const apis = [
    {
      name: "Payments API",
      description: "Create and manage international payments",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/payment"
    },
    {
      name: "Conversion API",
      description: "Currency conversion and exchange rates",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/conversion"
    },
    {
      name: "Accounts API",
      description: "Manage multi-currency accounts",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/account"
    },
    {
      name: "Recipients API",
      description: "Create and manage payment recipients",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/recipient"
    }
  ];

  const credits = {
    used: 245,
    total: 1000,
    percentage: 24.5
  };

  return (
    <div className="space-y-6">
      {/* Computing Credits */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Computing Credits</span>
              </CardTitle>
              <CardDescription>Track your API usage for sandbox testing</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{credits.total - credits.used}</p>
              <p className="text-sm text-muted-foreground">Credits Remaining</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Usage</span>
              <span className="font-medium">
                {credits.used} / {credits.total}
              </span>
            </div>
            <Progress value={credits.percentage} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Credits reset monthly. Contact support to increase your limit.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* API Catalog */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Available APIs</CardTitle>
          <CardDescription>Explore and integrate with Wise's API suite</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {apis.map((api, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{api.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {api.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{api.description}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={api.docs} target="_blank" rel="noopener noreferrer">
                    View Documentation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
