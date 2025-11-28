import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Zap } from "lucide-react";

export const ApiCatalog = () => {
  const apis = [
    {
      name: "Transfers API",
      description: "Create and manage international transfers",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/transfer"
    },
    {
      name: "Comparisons API",
      description: "Provides price and speed information about various money transfer providers",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/comparison"
    },
    {
      name: "Accounts API",
      description: "Manage multi-currency accounts",
      status: "available",
      docs: "https://docs.wise.com/api-docs/api-reference/multi-currency-account"
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

  const batchInfo = {
    maxTransfers: 1000,
    features: [
      "Our sandbox environment (https://api.wise-sandbox.com)",
      "Common API calls for creating users and profiles",
      "Automated tests that copy response data between calls",
      "Example responses for reference"
    ]
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

        {/* Batch Transfers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Batch Transfers</CardTitle>
            <CardDescription>
              Group multiple payments together for efficient processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Many of our partner's customers need to make multiple payments at once. Batch Groups enable
                you to group up to {batchInfo.maxTransfers.toLocaleString()} transfers under a single reference,
                allowing all payments to be funded at once.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-sm">We've created a Postman collection to help you test your integrations easily! It includes:</h4>
                <ul className="space-y-2">
                  {batchInfo.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="default" size="sm" asChild>
                  <a href="https://docs.wise.com/api-docs/guides/batch-transfers" target="_blank" rel="noopener noreferrer">
                    Read Guide
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://god.gw.postman.com/run-collection/24215266-2f0a6a19-ea36-42a4-a10b-8bf08becb3da?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D24215266-2f0a6a19-ea36-42a4-a10b-8bf08becb3da%26entityType%3Dcollection%26workspaceId%3Da247415a-a90f-4b3c-88d2-14aa27592db4#?env%5BWise%20Platform%20API%20(Sandbox)%5D=W3sia2V5IjoiY2xpZW50LWlkIiwidmFsdWUiOiJ0dy10ZXN0LWJhbmsiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNsaWVudC1zZWNyZXQiLCJ2YWx1ZSI6InR3LXRlc3QtYmFuayIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiaG9zdCIsInZhbHVlIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC50cmFuc2Zlcndpc2UudGVjaCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY2xpZW50LWNyZWRlbnRpYWxzLXRva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNsaWVudC1yZWRpcmVjdC11cmkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoicHJvZmlsZSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjbGllbnQtYXV0aC1jb2RlIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InRva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InJlZnJlc2giLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoicGVyc29uYWwtcHJvZmlsZS1pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJidXNpbmVzcy1wcm9maWxlLWlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im5ldy1xdW90ZS1pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJuZXctcmVjaXBpZW50LWlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImlkZW1wb3RlbmN5LWd1aWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibmV3LXRyYW5zZmVyLWlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6IndlYmhvb2sxLWlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6IndlYmhvb2syLWlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImJvcmRlcmxlc3MtaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYm9yZGVybGVzLXJlY2lwaWVudC1pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJwcm9maWxlLWlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55In1d " target="_blank" rel="noopener noreferrer">
                    Fork in Postman
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
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
