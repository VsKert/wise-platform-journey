import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Play, Book } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SandboxAccess = () => {
  const { toast } = useToast();

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText("test_sk_abc123xyz789");
    toast({
      title: "API Key Copied",
      description: "Sandbox API key copied to clipboard"
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span>Sandbox Environment</span>
            </CardTitle>
            <CardDescription>Test APIs safely before going live</CardDescription>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Sandbox API Key</span>
            <Button variant="outline" size="sm" onClick={handleCopyApiKey}>
              Copy
            </Button>
          </div>
          <code className="text-xs bg-background px-2 py-1 rounded block overflow-x-auto">
            test_sk_abc123xyz789
          </code>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Quick Start Guide</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">1.</span>
              <span>Copy your sandbox API key from above</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">2.</span>
              <span>Use sandbox.wise.com as the base URL</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">3.</span>
              <span>Test all endpoints without affecting live data</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="https://docs.wise.com/api-docs/guides/sandbox" target="_blank" rel="noopener noreferrer">
              <Book className="mr-2 h-4 w-4" />
              Tutorial
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://docs.wise.com/api-docs" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Full Docs
            </a>
          </Button>
        </div>

        <Button className="w-full" asChild>
          <a href="https://sandbox.wise.com" target="_blank" rel="noopener noreferrer">
            <Play className="mr-2 h-4 w-4" />
            Open Sandbox Console
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
