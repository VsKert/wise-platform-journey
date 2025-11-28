import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Building2 } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    country: "",
    industry: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    companySize: "",
    useCase: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    // Simulate account creation
    localStorage.setItem("userEmail", formData.contactEmail);
    localStorage.setItem("companyName", formData.companyName);
    
    toast({
      title: "Account created successfully!",
      description: "Redirecting to your dashboard..."
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="border-2">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl">Partner with Wise</CardTitle>
            <CardDescription className="text-lg">
              Fill in your company details to start the partnership journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Company Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      placeholder="Acme Corp"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyWebsite">Company Website *</Label>
                    <Input
                      id="companyWebsite"
                      type="url"
                      required
                      value={formData.companyWebsite}
                      onChange={(e) => handleChange("companyWebsite", e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size *</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleChange("companySize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="marketplace">Marketplace</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => handleChange("contactName", e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email Address *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      required
                      value={formData.contactEmail}
                      onChange={(e) => handleChange("contactEmail", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone Number *</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    required
                    value={formData.contactPhone}
                    onChange={(e) => handleChange("contactPhone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Use Case */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold">Integration Details</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="useCase">Describe your use case *</Label>
                  <Textarea
                    id="useCase"
                    required
                    value={formData.useCase}
                    onChange={(e) => handleChange("useCase", e.target.value)}
                    placeholder="Tell us about your platform and how you plan to integrate Wise..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Account Security */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold">Account Security</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange("confirmPassword", e.target.value)}
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full" size="lg">
                  Create Account & Continue
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-primary hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
