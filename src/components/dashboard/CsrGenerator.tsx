import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Download, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CsrGenerator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    commonName: "",
    organization: "",
    country: "",
    invalidatePrevious: false,
    keySize: "2048"
  });

  const handleGenerate = () => {
    if (!formData.commonName || !formData.organization || !formData.country) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate CSR generation
    const mockCSR = `-----BEGIN CERTIFICATE REQUEST-----
MIICvDCCAaQCAQAwdzELMAkGA1UEBhMC${formData.country}1RMBEGA1UECBMKQ2FsaWZv
cm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEZMBcGA1UEChMQ${btoa(formData.organization).slice(0, 16)}
1CzAJBgNVBAsTAklUMRQwEgYDVQQDEws${btoa(formData.commonName).slice(0, 12)}
-----END CERTIFICATE REQUEST-----`;

    const blob = new Blob([mockCSR], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificate-request.csr";
    a.click();

    toast({
      title: "CSR Generated",
      description: "Your Certificate Signing Request has been downloaded"
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>CSR Generator</span>
            </CardTitle>
            <CardDescription>Generate Certificate Signing Request</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-info/10 border border-info/20 rounded-lg p-3 flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-info flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            A CSR is required for secure API authentication in production
          </p>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="commonName">Common Name (Domain) *</Label>
            <Input
              id="commonName"
              value={formData.commonName}
              onChange={(e) => setFormData({ ...formData, commonName: e.target.value })}
              placeholder="api.yourcompany.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization *</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="Your Company Inc."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="DE">Germany</SelectItem>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keySize">Key Size</Label>
              <Select value={formData.keySize} onValueChange={(value) => setFormData({ ...formData, keySize: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2048">2048 bits</SelectItem>
                  <SelectItem value="4096">4096 bits</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="invalidatePrevious"
            type="checkbox"
            checked={formData.invalidatePrevious}
            onChange={(e) =>
              setFormData({ ...formData, invalidatePrevious: e.target.checked })
            }
            className="w-4 h-4"
          />
          <Label htmlFor="invalidatePrevious" className="text-sm">
            Invalidate previous keys
          </Label>
        </div>
        <Button className="w-full" onClick={handleGenerate}>
          <Download className="mr-2 h-4 w-4" />
          Generate & Download CSR
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Keep your private key secure. Never share it with anyone.
        </p>
      </CardContent>
    </Card>
  );
};
